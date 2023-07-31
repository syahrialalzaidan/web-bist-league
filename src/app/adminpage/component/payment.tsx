import {MdOpenInNew} from 'react-icons/md';

export default function PaymentVerification() {
  return (
    <>
      <h1 className="font-bold text-[#379392] text-5xl mt-14 mb-10">
        Data Pembayaran Tim
      </h1>
      <div className="w-full h-auto">
        <table className='w-full'>
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
            <tr className="border-b-2 border-[#BDBDBD]">
              <td className="px-4 py-4 text-center">1</td>
              <td className="px-12 py-4 text-center">
                Sultan Alta Alvaro Valencia
              </td>
              <td className="px-12 py-4 text-center">altaalvarojoe@gmail.com</td>
              <td className="px-12 py-4 flex justify-center">
                <button className="bg-[#40A89F] rounded-lg flex items-center gap-1 text-white px-4 py-2">
                  <p className="text-white">Open</p>
                  <MdOpenInNew/>
                </button>
              </td>
              <td className="px-6 py-4 text-center">ABCD123</td>
              <td className="px-6 py-4 text-center">
                <p className="font-bold text-[#3AD820]">Verified</p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 text-center">123</td>
              <td className="px-12 py-4">Sultan Alta Alvaro Valencia</td>
              <td className="px-12 py-4">altaalvarojoe@gmail.com</td>
              <td className="px-12 py-4">Bukti Bayar</td>
              <td className="px-6 py-4">ABCD123</td>
              <td className="px-6 py-4">
                <p className="font-bold text-[#E22727]">Rejected</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
