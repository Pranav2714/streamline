import CallList from "@/components/CallList";
import React from "react";

export default function Recordings() {
  return (
    <section className="flex size-full gap-10 flex-col text-white">
      <h1 className="font-bold text-3xl ">Recordings</h1>
      <CallList type="recordings" />
    </section>
  );
}
