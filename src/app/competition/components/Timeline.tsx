import Image from "next/image";

export default function Timeline() {
    return (
        <div className="relative bg-[url('/images/competition/timeline/bg-timeline-mobile.svg')] lg:bg-[url('/images/competition/timeline/bg-timeline-web.svg')] bg-cover pt-9 lg:py-14 pb-9 px-3.5 lg:px-40">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#F3EEE7] mb-8">Timeline</h1>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-4 items-center justify-center">
                {/* Stack 1 */}
                <div className="flex flex-wrap lg:flex-col">
                    <div className="flex-1 lg:w-auto h-auto flex justify-center items-center">
                        <div className="order-1 lg:mr-0">
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Aug 28 - Sep 3</h3>
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
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Aug 28 - Sep 24</h3>
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
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Sep 4 - Oct 8</h3>
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
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Sep 25</h3>
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
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Oct 8</h3>
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
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Oct 30</h3>
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
                            <h3 className="font-semibold py-4 text-white text-sm text-center">Oct 30 - Nov 12</h3>
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
                            <h3 className="font-semibold text-white text-sm text-center">Nov 25 - Nov 26</h3>
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