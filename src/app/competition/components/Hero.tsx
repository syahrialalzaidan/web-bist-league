import Image from "next/image";

import HeroRound from "@images/competition/hero-round.svg";

export default function Hero() {
    return (
        <div className="bg-gradient-to-r from-[#279181] to-[#005E7C] relative h-[568px] lg:h-[598px]">
            <Image
                src={HeroRound}
                alt="Hero Round"
                className="scale-125 w-[248px] h-[329px] lg:w-[400px] lg:h-[530px] overflow-hidden absolute transform -translate-x-24 -translate-y-2 z-0 lg:translate-x-10 lg:translate-y-10"
            />
            <div className="flex flex-col h-full justify-center items-center text-center z-10 lg:mx-72">
                <p className="text-[#F3EEE7] lg:leading-snug font-monument text-4xl lg:text-[64px] font-MonumentExtended font-extrabold drop-shadow-[-4px_4px_0_rgba(16,109,108,1)]">
                    BUSINESS IT CASE COMPETITON
                </p>
                <p className="mt-9 text-2xl text-white font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                    Registration closes in:
                </p>
                <div className="flex justify-center my-9 lg:my-10">
                    <button className="px-24 py-4 lg:py-4 bg-[#F8A22D] rounded-lg text-base lg:text-2xl font-bold">
                        Register Team
                    </button>
                </div>
            </div>
        </div>
    );
}
