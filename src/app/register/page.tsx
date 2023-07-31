import Register from "./components/Register";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
      <div className="h-screen aspect-[498/540] w-auto hidden xl:block fixed top-0 left-0">
        <Image
          src="/images/register/left-register.svg"
          fill={true}
          alt="BIST League 6.0"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="bg-[#F3EEE7] lg:bg-white h-screen px-9 py-12 lg:flex lg:flex-col lg:items-center lg:justify-center xl:items-end">
        <Register />
      </div>
    </>
  );
}
