import Image from "next/image";
import Token from "./component/Token";

export default function Jointeam() {
  return (
    <div className="bg-[url('/images/compregister/bg-comp-mobile.svg')] lg:bg-[url('/images/compregister/bg-comp-web.svg')] h-screen bg-cover">
      <div className="bg-[url('/images/compregister/left.svg')] lg:bg-[url('/images/compregister/left-web.svg')] bg-no-repeat lg:bg-left-bottom bg-fixed h-screen">
        <div className="bg-[url('/images/compregister/right.svg')] lg:bg-[url('/images/compregister/right-web.svg')] bg-no-repeat bg-right-bottom lg:bg-right-top h-screen">
          <Token />
        </div>
      </div>
    </div>
  );
}
