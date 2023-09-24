import Image from "next/image";

import KotakTop from "@images/competition/registration/regist-bata-top.svg";
import KotakBottom from "@images/competition/registration/regist-bata-bottom.svg";
import KotakTopMobile from "@images/competition/registration/regist-bata-top-mobile.svg"
import KotakBotMobile from "@images/competition/registration/regist-bata-bottom-mobile.svg"

import BulatTiga from "@images/competition/registration/regist-bulat-tiga.svg";

export default function Registration() {
    return (
        <div className="pt-16 lg:py-14 pb-9 px-3.5 lg:px-40 relative">
            <Image
                src={KotakTop}
                alt="Hero Round"
                className="hidden lg:block overflow-hidden absolute lg:top-0 lg:right-14 z-0"
            />
            <Image
                src={KotakBottom}
                alt="Hero Round"
                className="hidden lg:block overflow-hidden absolute lg:bottom-[152px] lg:left-28 z-0"
            />

            <h1 className="text-4xl lg:text-5xl font-extrabold relative z-10">Registration Fees</h1>
            <div className="flex flex-wrap justify-center text-center gap-9 xl:gap-x-44 xl:gap-y-14 my-9">
                <Image
                    src={KotakTopMobile}
                    alt="Hero Round"
                    className="lg:hidden overflow-hidden absolute top-[234px] right-0 z-0"
                />
                <Image
                    src={KotakBotMobile}
                    alt="Hero Round"
                    className="lg:hidden overflow-hidden absolute bottom-72 left-0 z-0"
                />
                <div className="w-64 h-28 bg-white rounded-lg p-5 shadow-[0_2px_0_0] shadow-[#B1D5D3] drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)] z-10">
                    <h2 className="text-2xl font-bold mb-4">Early Bird</h2>
                    <p className="text-xl">Rp30.000,00</p>
                </div>
                <div className="w-64 h-28 bg-white rounded-lg p-5 shadow-[0_2px_0_0] shadow-[#B1D5D3] drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)] z-10">
                    <h2 className="text-2xl font-bold mb-4">Normal</h2>
                    <p className="text-xl">Rp40.000,00</p>
                </div>
                <div className="w-64 h-28 bg-white rounded-lg p-5 shadow-[0_2px_0_0] shadow-[#B1D5D3] drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)] z-10">
                    <h2 className="text-2xl font-bold mb-4">Late</h2>
                    <p className="text-xl">Rp50.000,00</p>
                </div>
                <div className="w-64 h-28 bg-white rounded-lg p-5 shadow-[0_2px_0_0] shadow-[#B1D5D3] drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)] z-10">
                    <h2 className="text-2xl font-bold mb-4">Referral</h2>
                    <p className="text-xl">Rp30.000,00</p>
                </div>
                <div className="w-64 h-28 bg-white rounded-lg p-5 shadow-[0_2px_0_0] shadow-[#B1D5D3] drop-shadow-[0_4px_15px_rgba(0,0,0,0.25)] z-10">
                    <h2 className="text-2xl font-bold mb-4">Final Round</h2>
                    <p className="text-xl">Rp200.000,00</p>
                </div>
            </div>
        </div>
    )
} 