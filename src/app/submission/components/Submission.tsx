"use client"
import { useState } from "react";
import { AiOutlineArrowLeft, AiFillCheckCircle } from "react-icons/ai";

import Image from "next/image";

import BulatKiri from "@images/submission/left.svg";

export default function Submission() {
    const [selectedFile, setSelectedFile] = useState("No file selected");
    const [submittedFile, setSubmittedFile] = useState("Empty");

    const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setSelectedFile(e.target.files[0].name)
        setSubmittedFile(e.target.files[0].name)
    }
    return (
        <div className="px-5 py-7">
            <div className="flex text-[#F3EEE7] gap-3 items-center mt-8 lg:mt-0">
                <AiOutlineArrowLeft className="text-2xl lg:text-base" />
                <h1 className="w-full self-center font-extrabold text-2xl lg:hidden">Submission</h1>
                <h1 className="font-bold text-base hidden lg:block">Back to Competition</h1>
            </div>

            <h1 className="text-center text-white text-5xl font-bold mb-16 mt-8 hidden lg:block">Submission</h1>

            <div className="flex items-center justify-center my-8 ">
                <div className="bg-white py-6 px-5 rounded-lg max-w-[540px] z-10">
                    {submittedFile === "Empty" ? (
                        <h1 className="text-center text-sm lg:text-xl py-16 px-3 lg:px-10 lg:py-0 lg:pt-16 lg:pb-28 ">
                            Preliminary submission must be submitted in PDF format with a maximum size of 10MB.
                        </h1>
                    ) : (
                        <div className="lg:px-12 lg:pt-4 lg:pb-10">
                            <h1 className="text-center text-sm lg:text-xl mb-5">
                                You may do another submission until the deadline.
                            </h1>
                            <h1 className="text-center text-sm lg:text-xl mb-5">
                                Preliminary submission must be submitted in PDF format with a maximum size of 10MB.
                            </h1>
                            <h1 className="text-center text-sm lg:text-xl">
                                Last submission:
                            </h1>
                            <h1 className="text-center text-sm font-bold lg:text-xl mb-6">October 1st, 2023, 23:59</h1>
                        </div>
                    )}

                    <form>
                        <div className="border border-[#BDBDBD] mb-4 lg:mx-16 p-3.5 rounded text-sm font-medium flex items-center justify-between">
                            <span className={submittedFile === "Empty" ? "text-[#BDBDBD]" : "text-[#413687]"}>
                                {submittedFile}
                            </span>
                            <AiFillCheckCircle className={submittedFile === "Empty" ? "hidden" : "inline-block ml-2 text-[#27ae60] w-6 h-6"} />
                        </div>
                        <div className="flex flex-row items-center border lg:mx-16 mb-6 border-[#BDBDBD] stroke-1 rounded justify-between pr-1 pl-2.5 py-1.5">
                            <label className="text-sm text-[#4F4F4F] font-medium">No file selected</label>
                            <input
                                type="file"
                                id="custom-input"
                                onChange={fileChangedHandler}
                                hidden
                            />
                            <label
                                htmlFor="custom-input"
                                className="block text-white ml-4 py-2.5 px-5 rounded-md border-0 text-sm font-semibold bg-[#413687] cursor-pointer"
                            >
                                {submittedFile === "Empty" ? "Upload" : "Reupload"}
                            </label>
                        </div>
                        <div className="mb-4 lg:mx-16 rounded text-sm font-bold flex items-center">
                            <button type="submit" className="bg-[#413687] px-12 py-3 lg:px-24 rounded-lg cursor-pointer w-full">
                                <h1 className="text-white text-center font-bold lg:text-xl">Submit</h1>
                            </button>
                        </div>
                    </form>
                </div>
                <Image
                    src={BulatKiri}
                    alt="Hero Round"
                    className="scale-75 lg:scale-100 absolute bottom-14 -left-20 lg:botton-0 lg:left-0 z-0"
                />
            </div>
        </div>
    )
}