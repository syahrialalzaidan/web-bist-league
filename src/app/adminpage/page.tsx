"use client";
import Image from "next/image";
import { FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import PaymentVerification from "./component/payment";
import { useState } from "react";
import UserVerification from "./component/user";

export default function AdnminPage() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="w-auto h-screen bg-[#F3EEE7] flex">
        <div className="w-1/6 flex flex-col items-center bg-[#379392] py-8 px-4">
          <Image
            src="/images/adminpage/bist.svg"
            width={100}
            height={100}
            alt=""
          />
          <div
            className={`${
              index == 0 ? "bg-[#F3EEE7] text-[#379392]" : "text-white"
            } w-full text-[20px] rounded-lg px-2 py-3 mt-16 flex items-center justify-center gap-5 cursor-pointer`}
            onClick={() => setIndex(0)}
          >
            <FaWallet size={28} />
            <p className="font-extrabold">
              Payment
              <br />
              Verification
            </p>
          </div>
          <div
            className={`${index == 1? "bg-[#F3EEE7] text-[#379392]" : "text-white"} w-full text-[20px] rounded-lg px-2 py-3 mt-2 flex items-center justify-center gap-5 cursor-pointer`}
            onClick={() => setIndex(1)}
          >
            <CgProfile size={28} />
            <p className="font-extrabold">
              User
              <br />
              Verification
            </p>
          </div>
        </div>
        <div className="w-5/6 px-14 py-9 flex flex-col">
          <div className="flex justify-end text-[#379392] items-center gap-1 mb-1">
            <p className="text-[#379392] text-[24px]">
              Hi, <span className="font-bold">Admin!</span>
            </p>
            <CgProfile size={32} />
          </div>
          <div className="w-full">
            {index == 0 ? <PaymentVerification /> : <UserVerification />}
          </div>
        </div>
      </div>
    </>
  );
}
