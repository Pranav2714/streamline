"use client";
import { cn } from "@/lib/utils";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStats,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useState } from "react";
import Image from "next/image";
import { Layout, LayoutList, User, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";

type CallLayout = "speaker-left" | "grid" | "speaker-right";

const MeetingRoom = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  if (callingState !== CallingState.JOINED) <Loader />;
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const [showParticipants, setshowParticipants] = useState(false);
  const [layout, setlayout] = useState<CallLayout>("speaker-left");
  const CallLayout = () => {
    switch (layout) {
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition={"right"} />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition={"left"} />;
      case "grid":
        return <PaginatedGridLayout />;
      default:
        return <SpeakerLayout participantsBarPosition={"left"} />;
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden text-white pt-4 ">
      <div className="flex relative size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("flex h-[calc(100vh-86px) hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList
            onClose={() => {
              setshowParticipants(false);
            }}
          />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
        <CallControls />
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <LayoutList className="bg-dark-1 text-white size={20}" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white cursor-pointer ">
            {["Grid", "Speaker-Left", "Speaker-right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="hover:bg-dark-2 cursor-pointer"
                  onClick={() => {
                    setlayout(item.toLowerCase() as CallLayout);
                  }}
                >
                  {item}
                </DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <button onClick={() => setshowParticipants((prev) => !prev)}>
          <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <Users size={20} className="text-white" />
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
