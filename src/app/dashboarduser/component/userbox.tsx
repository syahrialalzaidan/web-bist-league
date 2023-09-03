import { BsFillCheckCircleFill } from "react-icons/bs";

export default function UserBox(data:any){
    console.log(data);
    return(
        <>
              <div className="w-[150px] lg:w-[250px] flex flex-col bg-[#F3EEE7] rounded-lg gap-1 px-5 py-5">
                <p className="text-[16px] lg:text-[20px] font-bold">
                  {data.username}
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
        </>
    )
}