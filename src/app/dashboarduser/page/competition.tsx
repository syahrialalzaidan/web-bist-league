"use client";
import { useState } from "react";
import CountDown from "../component/countdown";
import Dropzone from "../component/dropzone";
import NavUser from "../component/nav";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiUpload } from "react-icons/bi";
import { FileRejection } from "react-dropzone";

export default function CompetitionUser() {
  const [paymentFile, setPaymentFile] = useState<File>();
  const [enrollfile, setEnrollFile] = useState<File>();
  const [studentfile, setStudentFile] = useState<File>();
  const [selfFile, setSelfFile] = useState<File>();
  const [twibbonfile, setTwibbonFile] = useState<File>();

  const handleFileRejected = (fileRejections: FileRejection[]) => {
    // Handle rejected files
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row bg-[#F3EEE7]">
        <NavUser active={2} />
        <div className="w-full px-6 py-6 lg:px-10 lg:py-10 flex flex-col gap-5">
          <p className="text-[24px] lg:text-[32px] font-extrabold text-center lg:text-start">
            Business IT Case Competition
          </p>
          <div className="w-full bg-white flex flex-col items-center rounded-lg gap-2 py-4 px-5 lg:px-2">
            <p className="text-[16px] lg:text-[24px] text-center mb-2">
              Preliminary submission closes in
            </p>
            <CountDown />
            <div className="w-full flex justify-center gap-4 mt-5">
              <button className="flex justify-center bg-white border-2 border-[#379392] rounded-lg text-[12px] lg:text-[16px] text-[#379392] font-extrabold px-6 lg:px-12 py-3">
                Download Guidebook
              </button>
              <button className="flex justify-center bg-[#379392] rounded-lg text-[12px] lg:text-[16px] text-white font-extrabold px-6 lg:px-14 py-3">
                Upload Submission
              </button>
            </div>
          </div>
          <p className="text-[24px] lg:text-[32px] font-extrabold text-center lg:text-start">
            Team Profile
          </p>
          <div className="w-full bg-white flex flex-col items-center rounded-lg gap-6 py-6 px-6 md:py-8 md:px-12">
            <div className="w-full flex justify-between items-center">
              <p className="text-[20px] lg:text-[24px] font-bold">Nama Tim</p>
              <button className="flex justify-center items-center bg-white border-2 border-[#379392] rounded-lg text-[12px] lg:text-[16px] text-[#379392] font-extrabold px-1 lg:px-6 py-3">
                Invitation Token: <span className="font-normal">AB09Z</span>
              </button>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-6">
              <div className="w-[150px] lg:w-[250px] flex flex-col bg-[#F3EEE7] rounded-lg gap-1 px-5 py-5">
                <p className="text-[16px] lg:text-[20px] font-bold">
                  Timothy Subekti
                </p>
                <div className="w-full flex justify-between items-center text-[#27AE60]">
                  <p className="text-[12px] lg:text-[16px] font-normal text-black">
                    Required Documents
                  </p>
                  <BsFillCheckCircleFill size={20} />
                </div>
                <div className="w-full flex justify-between items-center text-[#27AE60]">
                  <p className="text-[12px] lg:text-[16px] font-normal text-black">
                    Personal Information
                  </p>
                  <BsFillCheckCircleFill size={20} />
                </div>
              </div>
              <div className="w-[150px] lg:w-[250px] flex flex-col bg-[#F3EEE7] rounded-lg gap-1 px-5 py-5">
                <p className="text-[16px] lg:text-[20px] font-bold">
                  Timothy Subekti
                </p>
                <div className="w-full flex justify-between items-center text-[#27AE60]">
                  <p className="text-[12px] lg:text-[16px] font-normal text-black">
                    Required Documents
                  </p>
                  <BsFillCheckCircleFill size={20} />
                </div>
                <div className="w-full flex justify-between items-center text-[#27AE60]">
                  <p className="text-[12px] lg:text-[16px] font-normal text-black">
                    Personal Information
                  </p>
                  <BsFillCheckCircleFill size={20} />
                </div>
              </div>
              <div className="w-[150px] lg:w-[250px] flex flex-col bg-[#F3EEE7] rounded-lg gap-1 px-5 py-5">
                <p className="text-[16px] lg:text-[20px] font-bold">
                  Timothy Subekti
                </p>
                <div className="w-full flex justify-between items-center text-[#27AE60]">
                  <p className="text-[12px] lg:text-[16px] font-normal text-black">
                    Required Documents
                  </p>
                  <BsFillCheckCircleFill size={20} />
                </div>
                <div className="w-full flex justify-between items-center text-[#27AE60]">
                  <p className="text-[12px] lg:text-[16px] font-normal text-black">
                    Personal Information
                  </p>
                  <BsFillCheckCircleFill size={20} />
                </div>
              </div>
            </div>
          </div>
          <p className="text-[24px] lg:text-[32px] font-extrabold text-center lg:text-start">
            Required Documents
          </p>
          <div className="w-full bg-white flex flex-col rounded-lg gap-6 py-6 px-6 md:py-8 md:px-12">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] lg:text-[24px]">
                Proof of Payment (Only for Leaders)
              </p>
              <div className="flex flex-wrap gap-2 items-center text-[#27AE60]">
                <Dropzone
                  onFileSelected={(e: File) => setPaymentFile(e)}
                  onFileRejected={handleFileRejected}
                  onFileDeleted={() => setPaymentFile(undefined)}
                />
                <button className="bg-[#379392] px-2 py-2 text-center rounded-lg text-white hidden lg:block">
                  <BiUpload size={24} />
                </button>
                <BsFillCheckCircleFill size={24} />
                <p className="text-[12px] lg:text-[16px] font-normal">
                  Accepted
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] lg:text-[24px]">
                Proof of Enrollment
              </p>
              <div className="flex flex-wrap gap-2 items-center text-[#27AE60]">
                <Dropzone
                  onFileSelected={(e: File) => setEnrollFile(e)}
                  onFileRejected={handleFileRejected}
                  onFileDeleted={() =>setEnrollFile(undefined)}
                />
                <button className="bg-[#379392] px-2 py-2 text-center rounded-lg text-white hidden lg:block">
                  <BiUpload size={24} />
                </button>
                <BsFillCheckCircleFill size={24} />
                <p className="text-[12px] lg:text-[16px] font-normal">
                  Accepted
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] lg:text-[24px]">
                Student Card
              </p>
              <div className="flex flex-wrap gap-2 items-center text-[#27AE60]">
                <Dropzone
                  onFileSelected={(e: File) => setStudentFile(e)}
                  onFileRejected={handleFileRejected}
                  onFileDeleted={() =>setStudentFile(undefined)}
                />
                <button className="bg-[#379392] px-2 py-2 text-center rounded-lg text-white hidden lg:block">
                  <BiUpload size={24} />
                </button>
                <BsFillCheckCircleFill size={24} />
                <p className="text-[12px] lg:text-[16px] font-normal">
                  Accepted
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] lg:text-[24px]">
                Self of Portrait
              </p>
              <div className="flex flex-wrap gap-2 items-center text-[#27AE60]">
                <Dropzone
                  onFileSelected={(e: File) => setSelfFile(e)}
                  onFileRejected={handleFileRejected}
                  onFileDeleted={() =>setSelfFile(undefined)}
                />
                <button className="bg-[#379392] px-2 py-2 text-center rounded-lg text-white hidden lg:block">
                  <BiUpload size={24} />
                </button>
                <BsFillCheckCircleFill size={24} />
                <p className="text-[12px] lg:text-[16px] font-normal">
                  Accepted
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] lg:text-[24px]">
                Proof of Twibbon
              </p>
              <div className="flex flex-wrap gap-2 items-center text-[#27AE60]">
                <Dropzone
                  onFileSelected={(e: File) => setTwibbonFile(e)}
                  onFileRejected={handleFileRejected}
                  onFileDeleted={() =>setTwibbonFile(undefined)}
                />
                <button className="bg-[#379392] px-2 py-2 text-center rounded-lg text-white hidden lg:block">
                  <BiUpload size={24} />
                </button>
                <BsFillCheckCircleFill size={24} />
                <p className="text-[12px] lg:text-[16px] font-normal">
                  Accepted
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-[255px] md:w-[400px] flex justify-center items-center text-white bg-[#F8A22D] rounded-lg px-10 py-3 lg:hidden"
              >
                Save Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
