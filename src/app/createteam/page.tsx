import Image from "next/image";
import Createteam from "./component/Createteam";

export default function Jointeam() {
  return (
    <div className="bg-[url('/images/compregister/bg-comp-mobile.svg')] lg:bg-[url('/images/compregister/bg-comp-web.svg')] bg-cover">
      <div className="bg-[url('/images/compregister/left.svg')] lg:bg-[url('/images/compregister/left-web.svg')] bg-no-repeat lg:bg-left">
        <div className="bg-[url('/images/compregister/right.svg')] lg:bg-[url('/images/compregister/right-web.svg')] bg-no-repeat bg-right lg:bg-right-top">
          <div className="bg-none lg:bg-[url('/images/compregister/right-bottom-web.svg')] bg-no-repeat bg-right lg:bg-right-bottom">
            <Createteam />
          </div>
        </div>
      </div>
    </div>
  );
}
