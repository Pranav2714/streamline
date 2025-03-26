// "use client";
// import Loader from "@/components/Loader";
// import MeetingRoom from "@/components/MeetingRoom";
// import MeetingSetup from "@/components/MeetingSetup";
// import { useGetCallById } from "@/hooks/useGetCallById";
// import { useUser } from "@clerk/nextjs";
// import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
// import React, { useState } from "react";

// export default function Meeting({ params }: { params: { id: string } }) {
//   const { user, isLoaded } = useUser();
//   // const [isAudioVideoOn, setIsAudioVideoOn] = useState(false);
//   const [isSetupComplete, setIsSetupComplete] = useState(false);
//   const { id } = params;
//   const { call, isCallLoading } = useGetCallById(id);
//   if (!user || !isLoaded || isCallLoading) return <Loader />;
//   return (
//     <main className="h-screen w-full">
//       <StreamCall call={call}>
//         <StreamTheme>
//           {!isSetupComplete ? (
//             <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
//           ) : (
//             <MeetingRoom />
//           )}
//         </StreamTheme>
//       </StreamCall>
//     </main>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

type MeetingPageProps = {
  params: { id: string };
};

export default function Meeting({ params }: MeetingPageProps) {
  const { id } = params;
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(id);

  if (!user || !isLoaded || isCallLoading) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
}
