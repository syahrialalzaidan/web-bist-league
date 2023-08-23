"use client"
import Image from "next/image";

import HeroRound from "@images/competition/hero/hero-round.svg";
import BataTopLeft from "@images/competition/hero/hero-bata-topleft.svg";
import BataTopRight from "@images/competition/hero/hero-bata-topright.svg";
import BataMidLeft from "@images/competition/hero/hero-bata-mid.svg";
import BataMidRight from "@images/competition/hero/hero-bata-rightmid.svg";
import BataBotRight from "@images/competition/hero/hero-bata-botright.svg";
import KotakSatu from "@images/competition/hero/hero-kotak-satu.svg";

import { useState, useRef, useEffect } from "react";
import Cookies from 'universal-cookie';

export default function Hero() {
    const [login, setLogin] = useState(true);
    const cookies = new Cookies();

    const [timerDays, setTimerDays] = useState<number>(0);
    const [timerHours, setTimerHours] = useState<number>(0);
    const [timerMinutes, setTimerMinutes] = useState<number>(0);
    const [timerSeconds, setTimerSeconds] = useState<number>(0);

    const interval = useRef<NodeJS.Timeout | null>(null);

    console.log(cookies.get('jwt_token'));

    const startTimer = () => {
        const countdownDate = new Date('August 14, 2023 00:00:00').getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // Stop timer
                clearInterval(interval.current!);
            } else {
                // Update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, []);
    
    return (
        <div className="bg-[url('/images/competition/hero/bg-hero-mobile.svg')] lg:bg-[url('/images/competition/hero/bg-hero-web.svg')] relative h-[568px] lg:h-[644px] bg-cover overflow-hidden mt-20">
            <Image
                src={BataMidLeft}
                alt="Bata Mid Left"
                className="hidden lg:block overflow-hidden absolute bottom-44"
            />
            <Image
                src={BataTopLeft}
                alt="Bata Top Left"
                className="scale-125 hidden lg:block overflow-hidden absolute -top-1 left-32"
            />
            <Image
                src={BataTopRight}
                alt="Bata Top Right"
                className="hidden lg:block overflow-hidden absolute -top-10 right-4"
            />
            <Image
                src={BataMidRight}
                alt="Bata Mid Right"
                className="hidden lg:block overflow-hidden absolute top-56 right-0"
            />
            <Image
                src={BataBotRight}
                alt="Bata Bot Right"
                className="hidden lg:block overflow-hidden absolute bottom-24 right-0"
            />
            <Image
                src={KotakSatu}
                alt="Kotak Satu"
                className="hidden lg:block overflow-hidden absolute top-40 right-24"
            />

            <div className="flex flex-col mx-4 h-full justify-center items-center text-center z-10 lg:mx-72">
                <Image
                    src={HeroRound}
                    alt="Hero Round"
                    className="scale-125 w-[248px] h-[329px] lg:w-[400px] lg:h-[530px] overflow-hidden absolute -top-2.5 left-[-90px] lg:top-20 lg:left-12 z-0"
                />
                <p className="mt-24 text-[#F3EEE7] lg:leading-snug font-monument text-3xl lg:text-[64px] font-MonumentExtended font-extrabold drop-shadow-[-4px_4px_0_rgba(16,109,108,1)]">
                    BUSINESS IT CASE COMPETITION
                </p>
                {login && (
                    <>
                        <p className="mt-6 mb-3.5 text-2xl text-white font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                            Registration closes in:
                        </p>
                        <div className="flex items-center justify-center z-10">
                            <div className="w-[60px] h-[74px] lg:w-[141px] lg:h-[142px] bg-[#F4F0EC] rounded-lg py-2.5 px-2.5 lg:py-5 shadow-xl">
                                <h1 className="text-[#379392] text-2xl lg:text-7xl font-extrabold">{(timerDays < 10)  ? `0${timerDays}` : timerDays}</h1>
                                <p className="text-[#379392] text-sm lg:text-lg font-extrabold">Days</p>
                            </div>
                            <p className="text-4xl lg:text-7xl text-[#F4F0EC] font-MonumentExtended font-extrabold mb-2 lg:mb-5">:</p>
                            <div className="w-[60px] h-[74px] lg:w-[141px] lg:h-[142px] bg-[#F4F0EC] rounded-lg py-2.5 px-2.5 lg:py-5 shadow-xl">
                                <h1 className="text-[#379392] text-2xl lg:text-7xl font-extrabold">{(timerHours < 10) ? `0${timerHours}` : timerHours}</h1>
                                <p className="text-[#379392] text-sm lg:text-lg font-extrabold">Hours</p>
                            </div>
                            <p className="text-4xl lg:text-7xl text-[#F4F0EC] font-MonumentExtended font-extrabold mb-2 lg:mb-5">:</p>
                            <div className="w-[60px] h-[74px] lg:w-[141px] lg:h-[142px] bg-[#F4F0EC] rounded-lg py-2.5 px-2.5 lg:py-5 shadow-xl">
                                <h1 className="text-[#379392] text-2xl lg:text-7xl font-extrabold">{(timerMinutes < 10)  ? `0${timerMinutes}` : timerMinutes}</h1>
                                <p className="hidden lg:block text-[#379392] text-sm lg:text-lg font-extrabold">Minutes</p>
                                <p className="block lg:hidden text-[#379392] text-sm lg:text-lg font-extrabold">Mins</p>
                            </div>
                            <p className="text-4xl lg:text-7xl text-[#F4F0EC] font-MonumentExtended font-extrabold mb-2 lg:mb-5">:</p>
                            <div className="w-[60px] h-[74px] lg:w-[141px] lg:h-[142px] bg-[#F4F0EC] rounded-lg py-2.5 px-2.5 lg:py-5 shadow-xl">
                                <h1 className="text-[#379392] text-2xl lg:text-7xl font-extrabold">{(timerSeconds < 10)  ? `0${timerSeconds}` : timerSeconds}</h1>
                                <p className="hidden lg:block text-[#379392] text-sm lg:text-lg font-extrabold">Seconds</p>
                                <p className="block lg:hidden text-[#379392] text-sm lg:text-lg font-extrabold">Secs</p>
                            </div>
                        </div>
                    </>
                )}

                <div className="flex justify-center my-7 lg:my-10 z-10">
                    <button className="px-20 lg:px-24 py-4 bg-[#F8A22D] rounded-lg text-base lg:text-2xl font-bold">
                        Register Team
                    </button>
                </div>
            </div>
        </div>
    );
}
