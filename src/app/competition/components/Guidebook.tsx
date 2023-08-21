import Image from "next/image";

import GuideRound from "@images/competition/guidebook/guidebook-round.svg";
import BulatKecil from "@images/competition/guidebook/guidebook-bulat-kecil.svg";

export default function Guidebook() {
    return (
        <div className="bg-[url('/images/competition/guidebook/bg-guidebook-mobile.svg')] lg:bg-[url('/images/competition/guidebook/bg-guidebook-web.svg')] relative h-[750px] lg:h-full bg-cover pt-16 lg:py-14 pb-9 px-3.5 lg:px-40 overflow-hidden">
            <div className="lg:w-[782px]">
                <h1 className="text-4xl text-white lg:text-5xl font-extrabold">Guidebook</h1>
                <p className="text-white text-lg lg:text-xl font-normal mt-9 lg:mt-14 leading-7 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="flex mt-9 lg:mt-10 justify-center lg:justify-normal">
                    <button className="px-11 lg:px-6 py-4 bg-[#F8A22D] rounded-lg text-base lg:text-2xl font-bold">
                        Download Guidebook
                    </button>
                </div>
            </div>
            <Image
                src={GuideRound}
                alt="Hero Round"
                className="block absolute xl:-bottom-24 xl:right-48 -bottom-[240px] -right-20"
            />
            <Image
                src={BulatKecil}
                alt="Hero Round"
                className="scale-125 hidden lg:block absolute lg:top-16 lg:right-32"
            />
        </div>
    )
} 