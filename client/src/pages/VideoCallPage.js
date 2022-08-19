import React, { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "../components/VideoCall";

export default function VideoCallPage() {
  // state to check if the user is in the video calling
  const [inCall, setInCall] = useState(false);
  return (
    // Agora video player doesn't work if the parent container's height is not set to 100%
    <div className="video-call-container" style={{ height: "100%" }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}>
          Join Call
        </Button>
      )}
    </div>
  );
}
