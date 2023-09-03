"use client";
import { MdOpenInNew } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";

export default function PaymentVerification() {
  const [popupUrl, setPopupUrl] = useState<string | null>(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [isRejected, setIsRejected] = useState(false);
  const handleChange = (event:any) => {
    setTextareaValue(event.target.value);
  };
  const closePopUp = () => {
    setPopupUrl(null);
    setIsRejected(false);
  }
  const data = [
    {
      id: 1,
      teamName: "Sultan Alta Alvaro Valencia",
      email: "altaalvarojoe@gmail.com",
      proofOfPayment: "/images/adminpage/bist.svg",
      token: "ABCD123",
      status: "Verified",
    },
    {
      id: 2,
      teamName: "Sultan Alta Alvaro Valencia",
      email: "altaalvarojoe@gmail.com",
      proofOfPayment: "Bukti Bayar",
      token: "ABCD123",
      status: "Rejected",
    },
  ];
  return (
    <>
      <h1 className="font-bold text-[#379392] text-4xl md:text-5xl mt-14 mb-10">
        Data Pembayaran Tim
      </h1>
      <div className="w-full h-auto overflow-auto">
        <table className="w-full">
          <thead className="bg-[#379392] text-white">
            <tr>
              <th className="px-4 py-4">No</th>
              <th className="px-12">Nama Tim</th>
              <th className="px-12">Email</th>
              <th className="px-6">Bukti Bayar</th>
              <th className="px-6">Token</th>
              <th className="px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr className="border-b-2 border-[#BDBDBD]">
                <td className="px-4 py-4 text-center">{row.id}</td>
                <td className="px-12 py-4 text-center">{row.teamName}</td>
                <td className="px-12 py-4 text-center">{row.email}</td>
                <td className="px-12 py-10 flex justify-center items-center">
                  <button
                    className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-2"
                    onClick={() => setPopupUrl(row.proofOfPayment)}
                  >
                    <p className="text-white">Open</p>
                    <MdOpenInNew />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">{row.token}</td>
                <td className="px-6 py-4 text-center">
                  <p className={`font-bold ${row.status == "Verified" ? "text-[#3AD820]" : "text-[#E22727]"}`}>{row.status}</p>
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
            <div className="w-[300px] md:w-[350px] bg-[#F3EEE7] flex flex-col items-center px-4 py-6 gap-6 rounded-lg">
              <div className="w-full flex justify-start text-[#3A9587]">
                <button onClick={() => setIsRejected(false)}>
                  <AiOutlineArrowLeft size={24} />
                </button>
              </div>
              <p className="text-[#379392] text-[32px] lg:text-[28px] font-bold text-center">Alasan Penolakan</p>
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
    </>
  );
}
