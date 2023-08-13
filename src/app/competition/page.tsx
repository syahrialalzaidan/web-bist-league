import Description from "./components/Description";
import Guidebook from "./components/Guidebook";
import Hero from "./components/Hero";
import Registration from "./components/Registration";
import Timeline from "./components/Timeline";
import Header from "../landingpage/component/Header/Header";
import Footer from "../landingpage/component/Footer/Footer";

import Image from "next/image";
import KotakBottom from "@images/competition/hero/hero-kotak-bottom.svg";
import BulatTiga from "@images/competition/registration/regist-bulat-tiga.svg";

import axios from "axios";
import { cookies } from 'next/headers'

export default async function CompetitionnPage() {

    const cookieStore = cookies()
    const jwt_token = cookieStore.get("jwt_token")?.value

    const getTeam = async () => {
        try {
            const response = await axios.get(
                "https://be-staging-b6utdt2kwa-et.a.run.app/team",
                {
                    headers: {
                        Authorization: `Bearer ${jwt_token}`,
                    },
                }
            );

            console.log(response.data.data)
            return response.data.data;
        } catch (error) {
            console.error("Error getting profile:", error);
        }
    };

    const teamData = await getTeam();

    return (
        <div className="bg-[#F3EEE7] overflow-hidden">
            <Header page="competition" username="Tes" />
            <Hero teamData={teamData}/>
            <Description />
            <Timeline />
            <div className="relative">
                <Registration />
                <Guidebook />
                <Image
                    src={BulatTiga}
                    alt="Hero Round"
                    className="scale-50 lg:scale-100 absolute top-[698px] -right-11 lg:top-60 lg:right-0"
                />
            </div>
            <Image
                src={KotakBottom}
                alt="Hero Round"
                className="scale-50 lg:scale-100 overflow-hidden absolute top-[362px] -right-14 lg:top-[386px] lg:right-6 z-0"
            />
            <Footer />
        </div>
    )
}