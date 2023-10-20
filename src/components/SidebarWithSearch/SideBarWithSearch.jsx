import profilePicture from "../../../public/Images/SideBarWithSearch/profile_picture.svg"
import SeperatingLine from "./SeperatingLine";
import Footer from "./Footer";
import Header from "./Header";
import InstancesSection from "./InstancesSection";
import SettingsSection from "./SettingsSection";
import OptionsSection from "./OptionsSection";
import { useState } from "react";
const SideBarWithSearch = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleSidebar = () => {
        setIsExpanded(true);
    };
    const untoggleSidebar = () => {
        setIsExpanded(false);
    }
    return (
        <div className="bg-[#171918] scroll flex flex-col pt-8 pb-2 items-center h-screen max-h-screen overflow-y-scroll rounded-r-xl"
            style={{
                width: isExpanded ? "18vw" : "7vw",
            }}
        >
            <Header isExpanded={isExpanded} untoggleSidebar={untoggleSidebar}/>
            <SeperatingLine isExpanded={isExpanded} />
            <InstancesSection isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
            <SeperatingLine isExpanded={isExpanded} />
            <OptionsSection isExpanded={isExpanded} />
            <SettingsSection isExpanded={isExpanded} />
            <SeperatingLine isExpanded={isExpanded} />
            <Footer profilePicture={profilePicture} fullname="John Doe" companyName="MadGallery Basic" isExpanded={isExpanded}/>
        </div>
    );
}

export default SideBarWithSearch;