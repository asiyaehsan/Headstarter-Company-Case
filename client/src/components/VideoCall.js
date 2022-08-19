import { useState, useEffect } from "react";
import {
  channelName,
  config,
  useClient,
  useMicrophoneAndCameraTracks,
} from "../agora-config";
import { Grid } from "@material-ui/core";
import VideoPlayer from "./VideoPlayer";
import VideoControls from "./VideoControls";

export default function VideoCall(props) {
  const { setInCall } = props;
  const [users, setUsers] = useState([]);
  // "ready" checks if the video is ready
  // useMicrophoneAndCameraTracks handles the prompt for camera permission
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  // "start" check whether you can view other's videos
  const [start, setStart] = useState(false);
  const client = useClient();

  useEffect(() => {
    //   initialize the video call
    let init = async (name) => {
      // if a user published a stream, other users subscribe to the stream
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          // get a list of the previous users and append the new user to the list
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        // audio will automatically play for new users, don't need to subscribe
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });
      // if the user unpublished their stream, remove this user from the stream
      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          if (user.audioTrack) {
            user.audioTrack.stop();
          }
          if (mediaType === "video") {
            //   refresh the user list by filtering out the unpublished user
            setUsers((prevUsers) => {
              return prevUsers.filter((User) => User.uid !== user.uid);
            });
          }
        }
      });
      // if the user left the stream, remove the user from the stream
      // left and unpublish are similar; but need to consider both events
      client.on("user-left", (user) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });
      // handle when an user joins the video call
      try {
        // client.join(appId, channelName, token, uid)
        // automatically generate uid if set as "null"
        await client.join(config.appId, name, config.token, null);
      } catch (error) {
        console.log("error");
      }
      // tracks[0] - IMicrophoneAudioTrack
      // trakcs[1] - ICameraVideoTrack
      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };
    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
  }, [channelName, client, ready, tracks]);
  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid item style={{ height: "5%" }}>
        {ready && tracks && (
          <VideoControls
            tracks={tracks}
            setStart={setStart}
            setInCall={setInCall}
          />
        )}
      </Grid>
      <Grid item style={{ height: "95%" }}>
        {start && tracks && <VideoPlayer tracks={tracks} users={users} />}
      </Grid>
    </Grid>
  );
}
