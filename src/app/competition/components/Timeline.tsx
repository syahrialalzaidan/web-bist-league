import Image from "next/image";

export default function Timeline() {
    return (
        <div className="relative bg-[url('/images/competition/timeline/bg-timeline-mobile.svg')] lg:bg-[url('/images/competition/timeline/bg-timeline-web.svg')] bg-cover pt-9 lg:py-14 pb-9 px-3.5 lg:px-40">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#F3EEE7] mb-8">Timeline</h1>
            {/* <div className="absolute left-1/2 top-[92px] translate-x-0.5 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[800px] w-2.5" viewBox="0 0 10 750" fill="none">
                    <path d="M5 745L5.00003 4.99998" stroke="url(#paint0_linear_194_2320)" strokeWidth="10" stroke-linecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_194_2320" x1="5" y1="5" x2="4.99999" y2="745" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F3F3E7" />
                            <stop offset="1" stop-color="#FBE3C0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute top-[56%] left-48 translate-y-0.5 invisible lg:visible">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[1120px] h-2.5" viewBox="0 0 1120 10" fill="none">
                    <path d="M5 5L1115 4.9999" stroke="white" stroke-width="10" stroke-linecap="round" />
                </svg>
            </div>

            <div className="container mx-auto w-full h-full">
                <div className="relative wrap lg:flex overflow-hidden h-full">
                    <div className="mb-5 flex lg:flex-col justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 py-4 mr-3.5 lg:mr-0 lg:w-full">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Aug 14 - Aug 20</h3>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-[#F8A22D] shadow-xl w-7 h-7 rounded-full" />
                        <div className="order-1 w-5/12 py-4 pl-6 lg:pl-0 lg:w-3/4">
                            <h3 className="font-normal text-white text-sm text-center">Early Bird Registration</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex lg:flex-col justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 py-4 mr-3.5 lg:mr-0 lg:w-full">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Aug 14 - Sep 3</h3>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-[#F8A22D] shadow-xl w-7 h-7 rounded-full" />
                        <div className="order-1 w-5/12 py-4 pl-6 lg:pl-0 lg:w-3/4">
                            <h3 className="font-normal text-white text-sm text-center">Mini Video Challenge</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex lg:flex-col justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 py-4 mr-3.5 lg:mr-0 lg:w-full">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Aug 21 - Sep 17</h3>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-[#F8A22D] shadow-xl w-7 h-7 rounded-full" />
                        <div className="order-1 w-5/12 py-4 pl-6 lg:pl-0 lg:w-3/4">
                            <h3 className="font-normal text-white text-sm text-center">Normal Open Registration</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex lg:flex-col justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 py-4 mr-3.5 lg:mr-0 lg:w-full">
                            <h3 className="font-semibold text-white text-sm text-center">Sep 18</h3>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-[#F8A22D] shadow-xl w-7 h-7 rounded-full" />
                        <div className="order-1 w-5/12 py-4 pl-6 lg:pl-0 lg:w-3/4">
                            <h3 className="font-normal text-white text-sm text-center">Preliminary Case Release</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex lg:flex-col justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 py-4 mr-3.5 lg:mr-0 lg:w-full">
                            <h3 className="font-semibold text-white text-sm text-center">Sep 18 - Oct 2</h3>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-[#F8A22D] shadow-xl w-7 h-7 rounded-full" />
                        <div className="order-1 w-5/12 py-4 pl-6 lg:pl-0 lg:w-3/4">
                            <h3 className="font-normal text-white text-sm text-center">Preliminary Case Submission</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex lg:flex-col justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 py-4 mr-3.5 lg:mr-0 lg:w-full">
                            <h3 className="font-semibold text-white text-sm text-center">Oct 23</h3>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-[#F8A22D] shadow-xl w-7 h-7 rounded-full" />
                        <div className="order-1 w-5/12 py-4 pl-6 lg:pl-0 lg:w-3/4">
                            <h3 className="font-normal text-white text-sm text-center">Finalist Announcement</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex lg:flex-col justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 py-4 mr-3.5 lg:mr-0 lg:w-full">
                            <h3 className="font-semibold text-white text-sm text-center">Oct 23 - Nov 5</h3>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-[#F8A22D] shadow-xl w-7 h-7 rounded-full" />
                        <div className="order-1 w-5/12 py-4 pl-6 lg:pl-0 lg:w-3/4">
                            <h3 className="font-normal text-white text-sm text-center">Final Payment Period</h3>
                        </div>
                    </div>

                    <div className="mb-5 flex lg:flex-col justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 py-4 mr-3.5 lg:mr-0 lg:w-full">
                            <h3 className="font-semibold text-white text-sm text-center">Nov 18 - Nov 19</h3>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-[#F8A22D] shadow-xl w-7 h-7 rounded-full" />
                        <div className="order-1 w-5/12 py-4 pl-6 lg:pl-0 lg:w-3/4 lg:mb-5">
                            <h3 className="font-normal text-white text-sm text-center">Final Period</h3>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-4 items-center justify-center">
                {/* Stack 1 */}
                <div className="flex flex-wrap lg:flex-col">
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center">
                        <div className="order-1 lg:mr-0">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Aug 14 - Aug 20</h3>
                        </div>
                    </div>
                    <div className="relative w-2 h-auto lg:h-2 lg:w-full flex justify-center items-center mx-4 lg:mx-0">
                        <div className="h-full w-full bg-white rounded-t-lg lg:rounded-s-lg lg:rounded-e-none" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#F8A22D] z-10 text-white text-center" />
                    </div>
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center py-4 lg:py-0 lg:my-4">
                        <div className="order-1">
                            <h3 className="font-normal text-white text-sm text-center">Early Bird Registration</h3>
                        </div>
                    </div>
                </div>

                {/* Stack 2 */}
                <div className="flex flex-wrap lg:flex-col">
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center">
                        <div className="order-1 lg:mr-0 lg:w-full ">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Aug 14 - Sep 3</h3>
                        </div>
                    </div>
                    <div className="relative w-2 h-auto lg:h-2 lg:w-full flex justify-center items-center mx-4 lg:mx-0">
                        <div className="h-full w-full bg-white" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#F8A22D] z-10 text-white text-center" />
                    </div>
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center py-4 lg:py-0 lg:my-4">
                        <div className="order-1">
                            <h3 className="font-normal text-white text-sm text-center">Mini Video Challenge</h3>
                        </div>
                    </div>
                </div>

                {/* Stack 3 */}
                <div className="flex flex-wrap lg:flex-col">
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center">
                        <div className="order-1 lg:mr-0 lg:w-full ">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Aug 21 - Sep 17</h3>
                        </div>
                    </div>
                    <div className="relative w-2 h-auto lg:h-2 lg:w-full flex justify-center items-center mx-4 lg:mx-0">
                        <div className="h-full w-full bg-white" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#F8A22D] z-10 text-white text-center" />
                    </div>
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center py-4 lg:py-0 lg:my-4">
                        <div className="order-1">
                            <h3 className="font-normal text-white text-sm text-center">Normal Open Registration</h3>
                        </div>
                    </div>
                </div>

                {/* Stack 4 */}
                <div className="flex flex-wrap lg:flex-col">
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center">
                        <div className="order-1 lg:mr-0 lg:w-full ">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Sep 18</h3>
                        </div>
                    </div>
                    <div className="relative w-2 h-auto lg:h-2 lg:w-full flex justify-center items-center mx-4 lg:mx-0">
                        <div className="h-full w-full bg-white" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#F8A22D] z-10 text-white text-center" />
                    </div>
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center py-4 lg:py-0 lg:my-4">
                        <div className="order-1">
                            <h3 className="font-normal text-white text-sm text-center">Preliminary Case Release</h3>
                        </div>
                    </div>
                </div>

                {/* Stack 5 */}
                <div className="flex flex-wrap lg:flex-col">
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center">
                        <div className="order-1 lg:mr-0 lg:w-full ">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Sep 18 - Oct 2</h3>
                        </div>
                    </div>
                    <div className="relative w-2 h-auto lg:h-2 lg:w-full flex justify-center items-center mx-4 lg:mx-0">
                        <div className="h-full w-full bg-white" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#F8A22D] z-10 text-white text-center" />
                    </div>
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center py-4 lg:py-0 lg:my-4">
                        <div className="order-1">
                            <h3 className="font-normal text-white text-sm text-center">Preliminary Case Submission</h3>
                        </div>
                    </div>
                </div>

                {/* Stack 6 */}
                <div className="flex flex-wrap lg:flex-col pl-2 lg:pl-0">
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center">
                        <div className="order-1 lg:mr-0 lg:w-full ">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Oct 23</h3>
                        </div>
                    </div>
                    <div className="relative w-2 h-auto lg:h-2 lg:w-full flex justify-center items-center mx-4 lg:mx-0">
                        <div className="h-full w-full bg-white" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#F8A22D] z-10 text-white text-center" />
                    </div>
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center py-4 lg:py-0 lg:my-4">
                        <div className="order-1">
                            <h3 className="font-normal text-white text-sm text-center">Finalist Announcement</h3>
                        </div>
                    </div>
                </div>

                {/* Stack 7 */}
                <div className="flex flex-wrap lg:flex-col">
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center">
                        <div className="order-1 lg:mr-0 lg:w-full ">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Oct 23 - Nov 5</h3>
                        </div>
                    </div>
                    <div className="relative w-2 h-auto lg:h-2 lg:w-full flex justify-center items-center mx-4 lg:mx-0">
                        <div className="h-full w-full bg-white" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#F8A22D] z-10 text-white text-center" />
                    </div>
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center py-4 lg:py-0 lg:my-4">
                        <div className="order-1">
                            <h3 className="font-normal text-white text-sm text-center">Final Payment Period</h3>
                        </div>
                    </div>
                </div>

                {/* Stack 8 */}
                <div className="flex flex-wrap lg:flex-col">
                    <div className="flex-1 lg:w-[140%] h-auto flex justify-center items-center lg:-mt-1">
                        <div className="order-1 lg:mr-0 lg:w-full ">
                            <h3 className="font-semibold text-white text-sm text-center">Nov 18 - Nov 19</h3>
                        </div>
                    </div>
                    <div className="relative w-2 h-auto lg:h-2 lg:w-[140%] flex justify-center items-center mx-4 lg:mx-0 lg:mt-4">
                        <div className="h-full w-full bg-white rounded-b-lg lg:rounded-r-full lg:rounded-b-none" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#F8A22D] z-10 text-white text-center" />
                    </div>
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center py-8 lg:py-4">
                        <div className="order-1">
                            <h3 className="font-normal text-white text-sm text-center">Final Period</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}