import NavUser from "../component/nav";

export default function ProfilUser() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row bg-[#F3EEE7]">
        <NavUser active={1} />
        <div className="w-full px-6 py-6 lg:px-16 lg:py-10 flex flex-col items-center lg:items-start gap-4">
          <p className="text-[24px] lg:text-[32px] font-extrabold">Personal Information</p>
          <div className="w-full bg-white flex flex-col items-center rounded-lg gap-8 px-5 lg:px-9 py-4 lg:py-8 mb-8">
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-8">
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-extrabold">
                  Fullname
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Please enter your fullname"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="username" className="font-extrabold">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Please enter your username"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-extrabold">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Please enter your email"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3 mb-0"
                />
                <p className="font-medium text-[10px] md:text-[12px] text-[#2F80ED]">Please enter an active email address for verification.</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="age" className="font-extrabold">
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  placeholder="Please enter your age"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-8">
              <div className="flex flex-col">
                <label htmlFor="address" className="font-extrabold">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Please enter your address"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
                <p className="font-medium text-[10px] md:text-[12px] text-[#2F80ED]">Enter your predicted address at the end of October.</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone number" className="font-extrabold">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone number"
                  placeholder="Please enter your phone number"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
                <p className="font-medium text-[10px] md:text-[12px] text-[#2F80ED]"> Please enter an active phone number.</p>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-8">
              <div className="flex flex-col">
                <label htmlFor="institution" className="font-extrabold">
                  Institution
                </label>
                <input
                  type="text"
                  id="institution"
                  placeholder="Please enter your institution"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="linkedin" className="font-extrabold">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="linkedin"
                  placeholder="Please enter your linkedin"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
                <p className="font-medium text-[10px] md:text-[12px] text-[#2F80ED]">Please enter a valid link to your LinkedIn profile.</p>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-8">
              <div className="flex flex-col">
                <label htmlFor="major" className="font-extrabold">
                  Major
                </label>
                <input
                  type="text"
                  id="major"
                  placeholder="Please enter your major"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="idline" className="font-extrabold">
                  Id Line
                </label>
                <input
                  type="text"
                  id="idline"
                  placeholder="Please enter your idline"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-8">
              <div className="flex flex-col">
                <label htmlFor="entry year" className="font-extrabold">
                  Entry Year
                </label>
                <input
                  type="text"
                  id="entry year"
                  placeholder="Please enter your entry year"
                  className="w-full lg:w-72 xl:w-96 border-2 border-[#BDBDBD] rounded-sm px-2 lg:px-5 py-3"
                />
                <p className="font-medium text-[10px] md:text-[12px] text-[#2F80ED]">Please enter the year you got admitted at your current institution.</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button type = "submit" className="flex justify-center items-center text-white bg-[#F8A22D] rounded-lg px-10 py-3">
                Save Personal Information
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
