import Image from "next/image";

export default function Register() {
  return (
    <div className="flex flex-col lg:w-1/2 px-4">
      <div className="flex flex-row items-center mb-10 justify-between">
        <div className="flex flex-col gap-4 lg:gap-1">
          <h1 className="font-bold lg:hidden">Register</h1>
          <h1 className="text-3xl hidden lg:block font-extrabold">
            Registration
          </h1>
          <p className="font-semibold hidden lg:block">
            Already have a team account?{" "}
            <span className="underline">Login</span>
          </p>
          <h2 className="text-base font-bold lg:hidden">
            Hello, Welcome to BIST League 6.0!
          </h2>
        </div>

        <Image
          src="/images/register/bist-register.svg"
          width={70}
          height={80}
          alt="BIST League 6.0"
          className="w-auto h-auto lg:hidden"
        />
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Fullname</h3>
          <input
            type="text"
            placeholder="Please enter your fullname"
            className="border-2 border-gray-300 rounded-lg w-full lg:w-80 px-3 py-2 lg:px-6 lg:py-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Email</h3>
          <input
            type="text"
            placeholder="Please enter your email"
            className="border-2 border-gray-300 rounded-lg w-full lg:w-80 px-3 py-2 lg:px-6 lg:py-4 lg:max-w-xs"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-2 lg:mt-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Password</h3>
          <input
            type="password"
            placeholder="Please enter your password"
            className="border-2 border-gray-300 rounded-lg w-full lg:w-80 px-3 py-2 lg:px-6 lg:py-4 lg:max-w-xs"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Confirm Password</h3>
          <input
            type="password"
            placeholder="Please re-enter your password"
            className="border-2 border-gray-300 rounded-lg w-full lg:w-80 px-3 py-2 lg:px-6 lg:py-4 lg:max-w-xs"
          />
        </div>
      </div>

      <div className="flex-row hidden lg:flex items-center justify-center lg:gap-2 w-[600px] mt-3">
        <input type="checkbox" className="w-10 h-5 rounded-md" />
        <p>
          I have read and aggree to the Terms, Conditions, & Policy Agreements
          from BIST League 6.0
        </p>
      </div>

      <div className="mt-7 flex justify-center">
        <div className="cursor-pointer px-6 py-2 bg-[#F8A22D] rounded-xl lg:rounded-lg w-[119px] lg:w-[150px] max-w-sm">
          <h1 className="text-white text-center font-bold">Register</h1>
        </div>
      </div>
    </div>
  );
}
