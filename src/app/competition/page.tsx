import Description from "./components/Description";
import Guidebook from "./components/Guidebook";
import Hero from "./components/Hero";
import Registration from "./components/Registration";
import Timeline from "./components/Timeline";

export default function CompetitionnPage() {
    return (
        <div className="bg-[#F3EEE7] overflow-hidden">
            <Hero />
            <Description />
            <Timeline />
            <Registration />
            <Guidebook />
        </div>
    )
}