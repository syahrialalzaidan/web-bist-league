"use client";
import { useLayoutEffect, useState, useRef } from "react";

export default function CountDown({ date }: { date: string }) {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const interval = useRef<NodeJS.Timeout>();

  const countDownDate = new Date(date).getTime();

  useLayoutEffect(() => {
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance > 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);
    if(seconds == 1 && minutes == 0 && hours == 0 && days == 0){
      window.location.reload();
    }
    return () => {
      clearInterval(interval.current!);
    };
  });
  return (
    <>
      <div className="w-full flex justify-center items-center gap-1">
        <div className="w-[80px] lg:w-[150px] flex flex-col  items-center rounded-lg gap-0 bg-[#F3EEE7]">
          <p className="font-extrabold text-[16px] md:text-[32px] lg:text-[64px]">
            {days}
          </p>
          <p className="font-extrabold text-[12px] md:text-[16px] lg:text-[24px]">
            Days
          </p>
        </div>
        <p className="font-extrabold text-[16px] md:text-[32px] lg:text-[64px]">
          :
        </p>
        <div className="w-[80px] lg:w-[150px] flex flex-col  items-center rounded-lg gap-0 bg-[#F3EEE7]">
          <p className="font-extrabold text-[16px] md:text-[32px] lg:text-[64px]">
            {hours}
          </p>
          <p className="font-extrabold text-[12px] md:text-[16px] lg:text-[24px]">
            Hours
          </p>
        </div>
        <p className="font-extrabold text-[16px] md:text-[32px] lg:text-[64px]">
          :
        </p>
        <div className="w-[80px] lg:w-[150px] flex flex-col  items-center rounded-lg gap-0 bg-[#F3EEE7]">
          <p className="font-extrabold text-[16px] md:text-[32px] lg:text-[64px]">
            {minutes}
          </p>
          <p className="font-extrabold text-[12px] md:text-[16px] lg:text-[24px]">
            Minutes
          </p>
        </div>
        <p className="font-extrabold text-[16px] md:text-[32px] lg:text-[64px]">
          :
        </p>
        <div className="w-[80px] lg:w-[150px] flex flex-col  items-center rounded-lg gap-0 bg-[#F3EEE7]">
          <p className="font-extrabold text-[16px] md:text-[32px] lg:text-[64px]">
            {seconds}
          </p>
          <p className="font-extrabold text-[12px] md:text-[16px] lg:text-[24px]">
            Seconds
          </p>
        </div>
      </div>
    </>
  );
}
