import Description from "./components/Description";
import Guidebook from "./components/Guidebook";
import Hero from "./components/Hero";
import Registration from "./components/Registration";
import Timeline from "./components/Timeline";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";


import Image from "next/image";
import KotakBottom from "@images/competition/hero/hero-kotak-bottom.svg";
import BulatTiga from "@images/competition/registration/regist-bulat-tiga.svg";

import axios from "axios";
import { cookies } from 'next/headers'

export default async function CompetitionnPage() {

    const cookieStore = cookies()
    const jwt_token = cookieStore.get("jwt_token")?.value
    const user_id = cookieStore.get("user_id")?.value

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

            return response.data.data;
        } catch (error) {
            return null
        }
    };

    const getProfile = async () => {
        try {
            const response = await axios.get(`https://be-staging-b6utdt2kwa-et.a.run.app/profile/${user_id}`);

            return response.data.data;
        } catch (error) {
            return null
        }
    }

    const teamData = await getTeam();
    const profileData = await getProfile();

    return (
      <div className="bg-[#F3EEE7] overflow-hidden">
        <Header page="Competition" />
        <Hero />
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
    );
}