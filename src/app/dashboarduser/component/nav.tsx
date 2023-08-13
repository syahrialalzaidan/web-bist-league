"use client";
import { CgProfile } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { FaTrophy, FaMicrophone } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function NavUser({ active }: { active?: number }) {
  const [hamburger, setHamburger] = useState(false);
  const changeHamburger = () => {
    {
      hamburger ? setHamburger(false) : setHamburger(true);
    }
  };
  return (
    <>
      <div className="hidden lg:w-1/5 lg:bg-gradient-to-b lg:from-red-600 lg:to-orange-500 lg:flex lg:flex-col lg:px-3 lg:py-12">
        <div className="w-full rounded-lg bg-[#F3EEE7] px-4 py-4 mb-8">
          <p className="text-[20px] font-bold mb-[2px]">Timothy Subekti</p>
          <p className="text-[12px] font-bold">ITB Team</p>
        </div>
        <div
          className={`w-full flex items-center gap-2 rounded-lg ${
            active == 0
              ? "bg-[#F3EEE7] text-[#E22727]"
              : "bg-transparent text-white"
          } px-4 py-2 mb-4 cursor-pointer hover:bg-[#F3EEE7] hover:text-[#E22727]`}
        >
          <GoHomeFill size={24} />
          <p className="text-[18px] font-bold">Overview</p>
        </div>
        <div
          className={`w-full flex items-center gap-2 rounded-lg ${
            active == 1
              ? "bg-[#F3EEE7] text-[#E22727]"
              : "bg-transparent text-white"
          } px-4 py-2 mb-4 cursor-pointer hover:bg-[#F3EEE7] hover:text-[#E22727]`}
        >
          <CgProfile size={24} />
          <p className="text-[18px] font-bold">Profile</p>
        </div>
        <div
          className={`w-full flex items-center gap-2 rounded-lg ${
            active == 2
              ? "bg-[#F3EEE7] text-[#E22727]"
              : "bg-transparent text-white"
          } px-4 py-2 mb-4 cursor-pointer hover:bg-[#F3EEE7] hover:text-[#E22727]`}
        >
          <FaTrophy size={24} />
          <p className="text-[18px] font-bold">Competition</p>
        </div>
        <div
          className={`w-full flex items-center gap-2 rounded-lg ${
            active == 3
              ? "bg-[#F3EEE7] text-[#E22727]"
              : "bg-transparent text-white"
          } px-4 py-2 mb-4 cursor-pointer hover:bg-[#F3EEE7] hover:text-[#E22727]`}
        >
          <IoMdLaptop size={24} />
          <p className="text-[18px] font-bold">Bootcamp</p>
        </div>
        <div
          className={`w-full flex items-center gap-2 rounded-lg ${
            active == 4
              ? "bg-[#F3EEE7] text-[#E22727]"
              : "bg-transparent text-white"
          } px-4 py-2 mb-4 cursor-pointer hover:bg-[#F3EEE7] hover:text-[#E22727]`}
        >
          <FaMicrophone size={24} />
          <p className="text-[18px] font-bold">Webinar</p>
        </div>
        <div
          className={`w-full flex items-center gap-2 rounded-lg ${
            active == 5
              ? "bg-[#F3EEE7] text-[#E22727]"
              : "bg-transparent text-white"
          } px-4 py-2 mb-4 cursor-pointer hover:bg-[#F3EEE7] hover:text-[#E22727]`}
        >
          <LuArrowUpRightFromCircle size={24} />
          <p className="text-[18px] font-bold">Mini Challenge</p>
        </div>
      </div>
      <div className="w-full h-16 bg-[#F3EEE7] flex items-center justify-between lg:hidden px-5 py-3 text-[#E22727]">
        <div className="flex items-center gap-2 text-[18px] font-bold">
          {active == 0 ? (
            <>
              <GoHomeFill size={24} />
              <p>Overview</p>
            </>
          ) : active == 1 ? (
            <>
              <CgProfile size={24} />
              <p>Profile</p>
            </>
          ) : active == 2 ? (
            <>
              <FaTrophy size={24} />
              <p>Competition</p>
            </>
          ) : active == 3 ? (
            <>
              <IoMdLaptop size={24} />
              <p>Bootcamp</p>
            </>
          ) : active == 4 ? (
            <>
              <FaMicrophone size={24} />
              <p>Webinar</p>
            </>
          ) : (
            <>
              <LuArrowUpRightFromCircle size={24} />
              <p>Mini Challenge</p>
            </>
          )}
        </div>
        <button
          className="cursor-pointer hover:scale-105"
          onClick={changeHamburger}
        >
          {hamburger ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>
      {hamburger && (
        <>
          <div className="fixed w-full h-screen bg-gradient-to-b from-red-600 to-orange-500 flex flex-col items-center justify-between py-20 z-20">
            <div className="w-full flex flex-col items-center justify-center">
              <div className={`w-full gap-2 text-center ${active == 0? "bg-[#F3EEE7] text-[#E22727]" : "bg-transparent text-white"} text-[18px] font-bold cursor-pointer py-2 hover:bg-[#F3EEE7] hover:text-[#E22727]`}>
                Overview
              </div>
              <div className={`w-full gap-2 text-center ${active == 1? "bg-[#F3EEE7] text-[#E22727]" : "bg-transparent text-white"} text-[18px] font-bold cursor-pointer py-2 hover:bg-[#F3EEE7] hover:text-[#E22727]`}>
                Profile
              </div>
              <div className={`w-full gap-2 text-center ${active == 2? "bg-[#F3EEE7] text-[#E22727]" : "bg-transparent text-white"} text-[18px] font-bold cursor-pointer py-2 hover:bg-[#F3EEE7] hover:text-[#E22727]`}>
                Competition
              </div>
              <div className={`w-full gap-2 text-center ${active == 3? "bg-[#F3EEE7] text-[#E22727]" : "bg-transparent text-white"} text-[18px] font-bold cursor-pointer py-2 hover:bg-[#F3EEE7] hover:text-[#E22727]`}>
                Bootcamp
              </div>
              <div className={`w-full gap-2 text-center ${active == 4? "bg-[#F3EEE7] text-[#E22727]" : "bg-transparent text-white"} text-[18px] font-bold cursor-pointer py-2 hover:bg-[#F3EEE7] hover:text-[#E22727]`}>
                Webinar
              </div>
              <div className={`w-full gap-2 text-center ${active == 5? "bg-[#F3EEE7] text-[#E22727]" : "bg-transparent text-white"} text-[18px] font-bold cursor-pointer py-2 hover:bg-[#F3EEE7] hover:text-[#E22727]`}>
                Mini Challenge
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}