"use client";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

interface FormattedData {
  team_name: string;
  emails: string[];
}

export default function Createteam() {
  const cookie = new Cookies();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [emails, setEmails] = useState(["", "", ""]);

  const handleEmailChange = (index: number, value: string) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };

  const isEmailValid = (email: string): boolean => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const jwtToken = cookie.get("jwt_token");

  const handleSubmit = async () => {
    const formattedData: FormattedData = {
      team_name: name,
      emails: emails.filter((email) => email !== ""),
    };

    try {
      const response = await axios.post(
        "https://be-staging-b6utdt2kwa-et.a.run.app/team",
        formattedData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { jwt_token } = response.data.data;
      cookie.set("jwt_token", jwt_token, { path: "/" });

      setSubmitted(true); // Assuming you want to set submitted state to true upon success
    } catch (error) {
      console.error(error);
      // Handle error here and provide feedback to the user
    }
  };

  return (
    <div className="px-5 py-10">
      <div className="flex text-[#F3EEE7] gap-3 items-center lg:hidden">
        <AiOutlineArrowLeft className="text-2xl absolute lg:relative" />
        <h1 className="font-extrabold text-2xl lg:hidden w-screen text-center">
          Create a Team
        </h1>
        <h1 className="font-bold text-base hidden lg:block">
          Back to register options
        </h1>
      </div>

      <h1 className="text-center text-white text-5xl font-bold mb-16 mt-8 hidden lg:block">
        Create a Team
      </h1>

      <div className="flex flex-col">
        <div className="bg-white px-4 py-6 lg:p-10 rounded-lg self-center mt-8 lg:mt-1 w-full lg:w-[711px] ">
          <div className="flex flex-col gap-2">
            <label className="font-bold">Team Name</label>
            <input
              type="text"
              placeholder="Input Text Here"
              className="border border-gray-500 rounded-lg py-4 px-6"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name == "" ? (
              <p className="text-[#413687] text-sm">Team must not be empty</p>
            ) : (
              <div className="h-5"></div>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <label className="font-bold">Team Member 1 Email</label>
            <input
              type="text"
              placeholder="Input Text Here"
              className="border border-gray-500 rounded-lg py-4 px-6"
              value={emails[0]}
              onChange={(e) => handleEmailChange(0, e.target.value)}
            />
            {emails[0] !== "" && !isEmailValid(emails[0]) ? (
              <p className="text-[#413687] text-sm">Email must be valid</p>
            ) : (
              <div className="h-5"></div>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <label className="font-bold">Team Member 2 Email</label>
            <input
              type="text"
              placeholder="Input Text Here"
              className="border border-gray-500 rounded-lg py-4 px-6"
              value={emails[1]}
              onChange={(e) => handleEmailChange(1, e.target.value)}
            />
            {emails[1] !== "" && !isEmailValid(emails[1]) ? (
              <p className="text-[#413687] text-sm">Email must be valid</p>
            ) : (
              <div className="h-5"></div>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <label className="font-bold">Team Member 3 Email</label>
            <input
              type="text"
              placeholder="Input Text Here"
              className="border border-gray-500 rounded-lg py-4 px-6"
              value={emails[2]}
              onChange={(e) => handleEmailChange(2, e.target.value)}
            />
            {emails[2] !== "" && !isEmailValid(emails[2]) ? (
              <p className="text-[#413687] text-sm">Email must be valid</p>
            ) : (
              <div className="h-5"></div>
            )}
          </div>
          <p className="mt-6">Payment to one of the options:</p>
          <br />
          <p>1. Tim 122212122</p>
          <p>2. Abam 12221222</p>
          <p>3. Sul 12221222</p>

          <div
            className="bg-[#F8A22D] px-12 py-3 rounded-lg cursor-pointer mt-6"
            onClick={handleSubmit}
          >
            <h1 className="text-white text-center font-bold lg:text-xl">
              Register Team
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
