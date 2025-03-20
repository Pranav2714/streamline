import MeetingTypeList from "@/components/MeetingTypeList";

export default  function Home() {
  const now =  new Date();
  const date = now.toLocaleDateString("en-IN", { dateStyle: "full" });
  const time = now
    .toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toUpperCase();
  return (
    <section className="flex size-full gap-10 flex-col text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-cover bg-hero ">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal ">
            Upcoming Meeting at 12:30 PM
          </h2>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{`${time}`}</h1>
            <p className="font-medium text-sky-1 text-lg lg:text-2xl">
              {`${date}`}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}
