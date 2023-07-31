import { MdOpenInNew } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";

export default function UserVerification() {
  return (
    <>
      <h1 className="font-bold text-[#379392] text-5xl mt-14 mb-10">
        Data Registrasi User
      </h1>
      <div className="w-full h-auto">
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
            <tr className="border-b-2 border-[#BDBDBD]">
              <td className="px-4 py-2 text-center">1</td>
              <td className="px-12 py-2 text-center">
                Sultan Alta Alvaro Valencia
              </td>
              <td className="px-12 py-2">altaalvarojoe@gmail.com</td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-[#BDBDBD]">
              <td className="px-4 py-2 text-center">1</td>
              <td className="px-12 py-2 text-center">
                Sultan Alta Alvaro Valencia
              </td>
              <td className="px-12 py-2">altaalvarojoe@gmail.com</td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
              <td className="px-6 py-2">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-1">
                  <p className="text-white">Open</p>
                  <MdOpenInNew />
                </button>
                <div className="flex items-center text-[#27AE60]">
                  <GrCircleInformation />
                  <p className="text-[14px]">Verified</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
