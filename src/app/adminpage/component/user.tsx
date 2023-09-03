"use client";
import { MdOpenInNew } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

export default function UserVerification() {
  const [popupUrl, setPopupUrl] = useState<string | null>(null);
  const [showProfile, setShowProfile] = useState<any>(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [isRejected, setIsRejected] = useState(false);
  const handleChange = (event: any) => {
    setTextareaValue(event.target.value);
  };
  const closePopUp = () => {
    setPopupUrl(null);
    setIsRejected(false);
  };
  const data = [
    {
      id: 1,
      teamName: "Sultan Alta Alvaro Valencia",
      userName: "altaalvarojoe@gmail.com",
      proofOfEnrolment: "/images/adminpage/bist.svg",
      statusProof: "Verified",
      studentCard: "/images/adminpage/bist.svg",
      statusStudent: "Verified",
      selfPortrait: "/images/adminpage/bist.svg",
      statusSelf: "Verified",
      twibbon: "/images/adminpage/bist.svg",
      statusTwibbon: "Verified",
      profile: "/images/adminpage/bist.svg",
      statusProfile: "Verified",
    },
    {
      id: 2,
      teamName: "Another User",
      userName: "anotheruser@gmail.com",
      proofOfEnrolment: "/images/adminpage/bist.svg",
      statusProof: "Verified",
      studentCard: "/images/adminpage/bist.svg",
      statusStudent: "Verified",
      selfPortrait: "/images/adminpage/bist.svg",
      statusSelf: "Verified",
      twibbon: "/images/adminpage/bist.svg",
      statusTwibbon: "Verified",
      profile: "/images/adminpage/bist.svg",
      statusProfile: "Verified",
    },
    {
      id: 2,
      teamName: "Another User",
      userName: "anotheruser@gmail.com",
      proofOfEnrolment: "/images/adminpage/bist.svg",
      statusProof: "Verified",
      studentCard: "/images/adminpage/bist.svg",
      statusStudent: "Verified",
      selfPortrait: "/images/adminpage/bist.svg",
      statusSelf: "Verified",
      twibbon: "/images/adminpage/bist.svg",
      statusTwibbon: "Verified",
      profile: "/images/adminpage/bist.svg",
      statusProfile: "Verified",
    },
    {
      id: 2,
      teamName: "Another User",
      userName: "anotheruser@gmail.com",
      proofOfEnrolment: "/images/adminpage/bist.svg",
      statusProof: "Verified",
      studentCard: "/images/adminpage/bist.svg",
      statusStudent: "Verified",
      selfPortrait: "/images/adminpage/bist.svg",
      statusSelf: "Verified",
      twibbon: "/images/adminpage/bist.svg",
      statusTwibbon: "Verified",
      profile: "/images/adminpage/bist.svg",
      statusProfile: "Verified",
    },
    {
      id: 2,
      teamName: "Another User",
      userName: "anotheruser@gmail.com",
      proofOfEnrolment: "/images/adminpage/bist.svg",
      statusProof: "Verified",
      studentCard: "/images/adminpage/bist.svg",
      statusStudent: "Verified",
      selfPortrait: "/images/adminpage/bist.svg",
      statusSelf: "Verified",
      twibbon: "/images/adminpage/bist.svg",
      statusTwibbon: "Verified",
      profile: "/images/adminpage/bist.svg",
      statusProfile: "Verified",
    },
    {
      id: 2,
      teamName: "Another User",
      userName: "anotheruser@gmail.com",
      proofOfEnrolment: "/images/adminpage/bist.svg",
      statusProof: "Verified",
      studentCard: "/images/adminpage/bist.svg",
      statusStudent: "Verified",
      selfPortrait: "/images/adminpage/bist.svg",
      statusSelf: "Verified",
      twibbon: "/images/adminpage/bist.svg",
      statusTwibbon: "Verified",
      profile: "/images/adminpage/bist.svg",
      statusProfile: "Verified",
    },
    {
      id: 2,
      teamName: "Another User",
      userName: "anotheruser@gmail.com",
      proofOfEnrolment: "/images/adminpage/bist.svg",
      statusProof: "Verified",
      studentCard: "/images/adminpage/bist.svg",
      statusStudent: "Verified",
      selfPortrait: "/images/adminpage/bist.svg",
      statusSelf: "Verified",
      twibbon: "/images/adminpage/bist.svg",
      statusTwibbon: "Verified",
      profile: "/images/adminpage/bist.svg",
      statusProfile: "Verified",
    },
  ];
  return (
    <>
      <h1 className="font-bold text-[#379392] text-4xl md:text-5xl mt-14 mb-10">
        Data Registrasi User
      </h1>
      <div className="w-full h-auto overflow-auto">
        <table>
          <thead className="bg-[#379392] text-white">
            <tr>
              <th className="px-4 py-5">No</th>
              <th className="px-12">Nama Tim</th>
              <th className="px-12">Nama User</th>
              <th className="px-6">
                Proof of <br />
                Enrolment
              </th>
              <th className="px-6">Student Card</th>
              <th className="px-6">Self Portrait</th>
              <th className="px-6">Twibbon</th>
              <th className="px-6">Profile</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr className="border-b-2 border-[#BDBDBD]">
                <td
                  className="px-4 py-2 text-center cursor-pointer"
                  onClick={() => setShowProfile(row)}
                >
                  {row.id}
                </td>
                <td
                  className="px-12 py-2 text-center cursor-pointer"
                  onClick={() => setShowProfile(row)}
                >
                  {row.teamName}
                </td>
                <td
                  className="px-12 py-2 cursor-pointer"
                  onClick={() => setShowProfile(row)}
                >
                  {row.userName}
                </td>
                <td className="px-6 py-2">
                  <button
                    className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1 z-20"
                    onClick={() => setPopupUrl(row.proofOfEnrolment)}
                  >
                    <p className="text-white">Open</p>
                    <MdOpenInNew />
                  </button>
                  <div className="flex items-center text-[#27AE60]">
                    <HiOutlineInformationCircle />
                    <p className="text-[14px]">{row.statusProof}</p>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <button
                    className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1"
                    onClick={() => setPopupUrl(row.studentCard)}
                  >
                    <p className="text-white">Open</p>
                    <MdOpenInNew />
                  </button>
                  <div className="flex items-center text-[#27AE60]">
                    <HiOutlineInformationCircle />
                    <p className="text-[14px]">{row.statusStudent}</p>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <button
                    className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1"
                    onClick={() => setPopupUrl(row.selfPortrait)}
                  >
                    <p className="text-white">Open</p>
                    <MdOpenInNew />
                  </button>
                  <div className="flex items-center text-[#27AE60]">
                    <HiOutlineInformationCircle />
                    <p className="text-[14px]">{row.statusSelf}</p>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <button
                    className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1"
                    onClick={() => setPopupUrl(row.twibbon)}
                  >
                    <p className="text-white">Open</p>
                    <MdOpenInNew />
                  </button>
                  <div className="flex items-center text-[#27AE60]">
                    <HiOutlineInformationCircle />
                    <p className="text-[14px]">{row.statusTwibbon}</p>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <button
                    className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1"
                    onClick={() => setPopupUrl(row.profile)}
                  >
                    <p className="text-white">Open</p>
                    <MdOpenInNew />
                  </button>
                  <div className="flex items-center text-[#27AE60]">
                    <HiOutlineInformationCircle />
                    <p className="text-[14px]">{row.statusProfile}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {popupUrl && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-60"
            onClick={() => setPopupUrl(null)}
          ></div>
          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
            <div className="w-[300px] md:w-[360px] bg-[#F3EEE7] flex flex-col items-center px-4 py-6 gap-6 rounded-lg">
              <div className="w-full flex justify-start text-[#3A9587]">
                <button onClick={() => setPopupUrl(null)}>
                  <AiOutlineArrowLeft size={24} />
                </button>
              </div>
              <img src={popupUrl} alt="" />
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="text-white bg-[#3AD820] rounded-lg px-8 py-2"
                  onClick={() => setPopupUrl(null)}
                >
                  Verify
                </button>
                <button
                  type="submit"
                  className="text-white bg-[#E22727] rounded-lg px-8 py-2"
                  onClick={() => setIsRejected(true)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {isRejected && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-60"
            onClick={() => setPopupUrl(null)}
          ></div>
          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
            <div className="w-[300px] md:w-[360px] bg-[#F3EEE7] flex flex-col items-center px-4 py-6 gap-6 rounded-lg">
              <div className="w-full flex justify-start text-[#3A9587]">
                <button onClick={() => setIsRejected(false)}>
                  <AiOutlineArrowLeft size={24} />
                </button>
              </div>
              <p className="text-[#379392] text-[28px] lg:text-[32px] font-bold text-center">
                Alasan Penolakan
              </p>
              <div className="w-full flex justify-center px-4">
                <textarea
                  value={textareaValue}
                  onChange={handleChange}
                  placeholder="Masukkan alasan penolakan"
                  rows={5}
                  cols={40}
                  className="border border-gray-400 rounded p-4 bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-[#379392] rounded-lg px-8 py-2"
                onClick={closePopUp}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
      {showProfile && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-60"
            onClick={() => setShowProfile(null)}
          ></div>
          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
            <div className="w-1/3 bg-[#F3EEE7] flex flex-col items-center px-6 py-6 gap-2 rounded-lg">
              <div className="w-full flex justify-start">
                <p className="font-bold text-[#379392] text-[32px]">
                  Personal Information
                </p>
              </div>
              <div className="w-full h-1 bg-[#379392] mb-2"></div>
              <div className="w-full flex justify-between mb-3">
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">
                    Full Name
                  </p>
                  <p className="text-black text-[18px]">
                    {showProfile.teamName}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">
                    Username
                  </p>
                  <p className="text-black text-[18px]">
                    {showProfile.userName}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between mb-3">
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">Email</p>
                  <p className="text-black text-[18px]">
                    {showProfile.userName}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">Age</p>
                  <p className="text-black text-[18px]">
                    {showProfile.userName}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between mb-3">
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">
                    Address
                  </p>
                  <p className="text-black text-[18px]">
                    {showProfile.teamName}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">
                    Phone Number
                  </p>
                  <p className="text-black text-[18px]">
                    {showProfile.userName}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between mb-3">
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">
                    Institution
                  </p>
                  <p className="text-black text-[18px]">
                    {showProfile.teamName}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">
                    LinkedIn
                  </p>
                  <p className="text-black text-[18px]">
                    {showProfile.userName}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between mb-3">
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">Major</p>
                  <p className="text-black text-[18px]">
                    {showProfile.teamName}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">
                    ID Line
                  </p>
                  <p className="text-black text-[18px]">
                    {showProfile.userName}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between">
              <div className="flex flex-col">
                  <p className="font-bold text-[#379392] text-[24px]">
                    Entry Year
                  </p>
                  <p className="text-black text-[18px]">
                    {showProfile.userName}
                  </p>
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#379392] rounded-lg px-12 py-2"
                  onClick={() => setShowProfile(null)}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
