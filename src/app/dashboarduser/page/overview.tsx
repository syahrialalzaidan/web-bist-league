import EventUser from "../component/event";
import NavUser from "../component/nav";

export default function OverviewUser() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row bg-[#F3EEE7]">
        <NavUser active={0} />
        <div className="w-full px-6 py-6 lg:px-16 lg:py-10 flex flex-col gap-4">
          <p className="text-[36px] font-extrabold text-center lg:text-start">Events</p>
          <p className="text-[24px] font-bold">Registered</p>
          <div className="w-full flex justify-center lg:justify-start flex-wrap gap-2">
            <EventUser event={"competition"} />
          </div>
          <p className="text-[24px] font-bold">Not Started Yet</p>
          <div className="w-full flex justify-center lg:justify-start flex-wrap gap-2">
            <EventUser event={"bootcamp"} />
            <EventUser event={"webinar"} />
            <EventUser event={"challenge"} />
          </div>
        </div>
      </div>
    </>
  );
}
