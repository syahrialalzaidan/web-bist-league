"use client";
import { MdOpenInNew } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PaymentVerification() {
  const [popupUrl, setPopupUrl] = useState<string | null>(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [isRejected, setIsRejected] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const handleChange = (event: any) => {
    setTextareaValue(event.target.value);
  };
  const closePopUp = () => {
    setPopupUrl(null);
    setIsRejected(false);
  };
  
  const url = "https://be-staging-b6utdt2kwa-et.a.run.app/";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtX2lkIjoiIiwidXNlcl9pZCI6Ijg5MjkzNjQyLTliZDEtNGNlOS04YmYwLWRiMTY0MTJhMjQ5ZSIsImlzcyI6InJlc3QiLCJleHAiOjE2OTQ0MzcxODAsImlhdCI6MTY5NDAwNTE4MH0.V3fJMCNuZ-IW_dGAO-21tzoCarOfFMhVUZsYiOYADg0";

  const getData = async (page: number) => {
    try {
      const response = await axios.get(url + "admin/payments?page=" + page, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      setTotalPages(response.data?.data?.total_page);
      setData(response.data?.data?.page_data);
      console.log(response.data?.data?.page_data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(1);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    getData(page);
  };

  const pushPage = ({ pageNumbers, i }: { pageNumbers: any; i: number }) => {
    pageNumbers.push(
      <div
        key={i}
        className={
          currentPage === i
            ? "text-center bg-[#379392] px-4 py-2 rounded-lg text-white text-[14px] font-bold"
            : "text-center bg-transparent px-4 py-2 rounded-lg border-2 border-[#828282] text-[#828282] text-[14px] font-bold"
        }
        onClick={() => handlePageChange(i)}
      >
        {i}
      </div>
    );
  };

  const renderPage = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages < 5) {
        pushPage({ pageNumbers, i });
      } else {
        if (currentPage < totalPages - 3) {
          if (
            (i < currentPage + 3 && i >= currentPage - 1) ||
            i == totalPages
          ) {
            pushPage({ pageNumbers, i });
          } else if (i == currentPage + 3) {
            pageNumbers.push(<li>...</li>);
          }
        } else {
          if (i >= totalPages - 3 || i <= totalPages - currentPage + 1) {
            pushPage({ pageNumbers, i });
          } else if (i == totalPages - 4) {
            pageNumbers.push(<li>...</li>);
          }
        }
      }
    }
    return pageNumbers;
  };

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
            {data.map((row: any, id: number) => (
              <tr className="border-b-2 border-[#BDBDBD]">
                <td className="px-4 py-4 text-center">{id + 1}</td>
                <td className="px-12 py-4 text-center">{row.team_name}</td>
                <td className="px-12 py-4 text-center">
                  {row.team_member_mails[0]}
                </td>
                <td className="px-12 py-10 flex justify-center items-center">
                  <button
                    className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-2"
                    onClick={() => setPopupUrl(row.payment_url)}
                  >
                    <p className="text-white">Open</p>
                    <MdOpenInNew />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">{row.code}</td>
                <td className="px-6 py-4 text-center">
                  <p
                    className={`font-bold ${
                      row.status == "Verified"
                        ? "text-[#3AD820]"
                        : row.status == "Rejected"
                        ? "text-[#E22727]"
                        : "text-[#4F4F4F]"
                    }`}
                  >
                    {row.payment_status == "no file" || "under review"
                      ? "-"
                      : row.payment_status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-end mt-4">
          <div className="flex items-center gap-3">{renderPage()}</div>
        </div>
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
              <Image src={popupUrl} alt="" />
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
              <p className="text-[#379392] text-[32px] lg:text-[28px] font-bold text-center">
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
    </>
  );
}
