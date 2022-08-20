// Agora configuration for video calling feature

import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "9df0cc6e793c44c99b092dfbe6f0627b";
const token =
  "007eJxTYKhSsDFZ5Hg2qbNu761rYnF1uuFbsznu8Zj2i8k0iC96MU2BwTIlzSA52SzV3NI42cQk2dIyycDSKCUtKdUszcDMyDzpKxNjckkIU7LNo4+MjAwQCOILM2SkJqYUlyQWlaQW6SZnJOblpeYwMAAA2xsksQ=="; //   temp token, update on Agora if expired

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token }; // rtc - real-time communication

// hooks
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "headstarter-channel";
