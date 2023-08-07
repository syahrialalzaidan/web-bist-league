"use client";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

export default function Token() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="px-5 py-10">
      <div className="flex text-[#F3EEE7] gap-3 items-center">
        <AiOutlineArrowLeft className="text-2xl absolute lg:relative" />
        <h1 className="font-extrabold text-2xl lg:hidden w-full text-center">
          Join a Team
        </h1>
        <h1 className="font-bold text-base hidden  lg:block">
          Back to register options
        </h1>
      </div>

      <h1 className="text-center text-white text-5xl font-bold mb-16 mt-8 hidden lg:block">
        Join a Team
      </h1>

      {joined ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col bg-white px-10 lg:py-14 py-7 gap-4 lg:gap-12 rounded-lg mt-8 max-w-sm self-center">
            <h1 className="text-center text-lg lg:text-xl">
              Input token code here (ask your team leader)
            </h1>

            <input
              type="text"
              className="px-4 py-2 rounded-lg border border-gray-500 font-bold"
            />

            <div
              className="bg-[#F8A22D] py-3 rounded-lg cursor-pointer"
              onClick={() => {
                setJoined(!joined);
              }}
            >
              <h1 className="text-white text-center font-bold lg:text-xl">
                Join a Team with Token
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex flex-col bg-white px-10 lg:py-14 py-7 gap-8 lg:gap-12 rounded-lg mt-8 max-w-sm">
            <h1 className="text-center text-lg lg:text-xl">
              Congratulations, you have successfully joined{" "}
              <span className="font-bold">{"<Team Name>"}</span> as a member!
            </h1>
            <div
              className="bg-[#F8A22D] px-12 py-3 rounded-lg cursor-pointer"
              onClick={() => {
                setJoined(!joined);
              }}
            >
              <h1 className="text-white text-center font-bold lg:text-xl">
                Go to Dashboard
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
