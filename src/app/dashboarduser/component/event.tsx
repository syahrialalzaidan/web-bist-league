export default function EventUser({ event }: { event: string }) {
  return (
    <>
      {event == "competition" ? (
        <>
          <img src="/images/dashboarduser/business.png" alt="" className="" />
        </>
      ) : event == "bootcamp" ? (
        <>
          <img src="/images/dashboarduser/bootcamp.png" alt="" className="" />
        </>
      ) : event == "webinar" ? (
        <>
          <img src="/images/dashboarduser/webinar.png" alt="" className="" />
        </>
      ) : event == "challenge" ? (
        <>
          <img src="/images/dashboarduser/challenge.png" alt="" className="" />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
