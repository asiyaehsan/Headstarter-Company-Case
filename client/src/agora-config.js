// Agora configuration for video calling feature

import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "9df0cc6e793c44c99b092dfbe6f0627b";
const token =
  "007eJxTYNhVPcfKpTnyxaQDGQX9zyrOGvvuygrqbkiW7Xr/IVRHmEuBwTIlzSA52SzV3NI42cQk2dIyycDSKCUtKdUszcDMyDwpefX/pMd/GJInnKxiZmSAQBBfmCEjNTGluCSxqCS1SDc5IzEvLzWHgQEACJgpbw=="; //   temp token, expires on 8/20

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token }; // rtc - real-time communication

// hooks
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
