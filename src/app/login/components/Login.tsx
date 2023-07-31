import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-start lg:justify-start gap-48">
      <div className="py-20 px-20 lg:py-6">
        <h1 className="font-extrabold text-base lg:text-2xl lg:mt-12">Login</h1>
        <h1 className="font-extrabold text-base mt-4 mb-4 lg:text-3xl">
          Hello, Welcome Back!
        </h1>
        <Image
          src="/images/login/login mobile.svg"
          width={500}
          height={500}
          alt="Login Mobile Thumbnail"
          className="lg:hidden"
        />

        <div className="mt-5 lg:mt-16 text-sm lg:text-xl">
          <h1 className="font-bold">Username</h1>
          <input
            className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 mt-2 mb-2 max-w-xl"
            type="text"
            placeholder="Please enter your username "
          />
        </div>

        <div className="mt-5 lg:mt-9 text-sm lg:text-xl">
          <h1 className="font-bold">Password</h1>
          <input
            className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 mt-2 mb-2 max-w-xl"
            type="text"
            placeholder="Please enter your password "
          />
        </div>

        <div className="flex justify-center max-w-xl">
          <button className="px-9 lg:px-28 py-2 lg:py-4 bg-[#F8A22D] text-white rounded-xl text-base lg:text-xl font-extrabold mt-5 lg:mt-14">
            Login
          </button>
        </div>
        <p className="text-center hidden lg:block">
          Do not have the account yet? <span className="underline"> Register</span>{" "}
        </p>
      </div>

      {/* src="/images/login/login web.svg" */}

      <div className="h-screen aspect-[498/540] w-auto hidden lg:block fixed top-0 right-0">
        <Image
          src="/images/login/login web.svg"
          fill={true}
          alt="BIST League 6.0"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
