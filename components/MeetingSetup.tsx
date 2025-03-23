"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggeledOn, setIsMicCamToggeledOn] = useState(false);
  const call = useCall();
  if (!call)
    throw new Error("usecall must be used within StreamCall component");
  useEffect(() => {
    if (isMicCamToggeledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggeledOn, call?.camera, call]);

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center
  gap-3 text-white"
    >
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggeledOn}
            onChange={(e) => {
              setIsMicCamToggeledOn(e.target.checked);
            }}
            className="cursor-pointer"
          />
          Join with Mic and Camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="bg-green-500 rounded-lg text-white hover:bg-green-600 cursor-pointer px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
