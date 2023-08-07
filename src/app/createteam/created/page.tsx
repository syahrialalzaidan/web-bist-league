import Created from "./Created";

export default function CreatedPage() {
  return (
    <div className="bg-[url('/images/compregister/bg-comp-mobile.svg')] lg:bg-[url('/images/compregister/bg-comp-web.svg')] bg-cover h-screen">
      <div className="bg-[url('/images/compregister/left.svg')] lg:bg-[url('/images/compregister/left-web.svg')] bg-no-repeat lg:bg-left h-screen">
        <div className="bg-[url('/images/compregister/right.svg')] lg:bg-[url('/images/compregister/right-web.svg')] bg-no-repeat bg-right-bottom lg:bg-right-top h-screen">
          <Created />
        </div>
      </div>
    </div>
  );
}
