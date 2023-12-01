import Footer from "./subComponents/Footer";
import Header from "./subComponents/Header";
import InstancesSection from "./subComponents/InstancesSection";
import SettingsSection from "./subComponents/SettingsSection";
import OptionsSection from "./subComponents/OptionsSection";
import React, { useState} from 'react';
import { generaleStyle } from "../../types/generaleStyleType";
import { userInfo } from "../../types/userInfoType";
import { simpleLink } from "../../types/linkType";
import { LogoInfo } from "@/types/logoType";


export interface template1SidnavType{
    mainLinks:simpleLink[],
    settingsLinks:simpleLink[],
    optionsLinks?:simpleLink[],
    profileInformation:userInfo,
    logo:LogoInfo,
    generalStyles:generaleStyle,
    logout:()=>void
}

/**
 * @component SideBarWithSearch - A responsive React functional component for a sidebar with search functionality.
 *
 * @example
 * // Example usage of SideBarWithSearch
 * import UserProfileImage from "my_image_source1"
 * import { HomeIcon, SettingsIcon, OptionsIcon } from "my_image_source2"
 * import YourLogoComponent from "my_image_source3"
 * 
 * //? stands for optional element
 * const sidebarProps = {
 *   mainLinks: [
 *     { ?icon: HomeIcon, name: 'Home', link: '/home' },
 *     // Add more main links as needed
 *   ],
 *   settingsLinks: [
 *     { ?icon: SettingsIcon, name: 'Settings', link: '/settings' },
 *     // Add more settings links as needed
 *   ],
 *   ?optionsLinks: [
 *     { ?icon: OptionsIcon, name: 'Options', link: '/options' },
 *     // Add more options links as needed
 *   ],
 *   profileInformation: {
 *     image: UserProfileImage,
 *     ?name: 'Rayan ALLALI',
 *     ?additionalInfo: 'GDG Algiers Dev Core Team Member',
 *     ?role: 'Admin',
 *   },
 *   logo: { ?title: 'Your Company', logoIcon: YourLogoComponent },
 *   generalStyles: {
 *     textColor: '#333333',
 *     ?activeBg: '#f0f0f0',
 *     ?activeTextColor: '#007bff',
 *     ?background: '#ffffff',
 *     textSize: '16px',
 *     ?HoverTextColor: '#555555',
 *     ?HoverBgColor: '#f0f0f0',
 *     ?BackgroundColor: '#ffffff',
 *     ?ActiveTextColor: '#007bff',
 *     ?BorderColor: '#dddddd',
 *     ?ButtonColor: '#3498db',
 *   },
 *   logout: () => {
 *     // Handle logout functionality
 *   },
 * };
 *
 * <SideBarWithSearch {...sidebarProps} />
 *
 * @param {Object} props - The props for the component.
 * @param {simpleLink[]} props.mainLinks - The main links to be displayed in the sidebar.
 * @param {simpleLink[]} props.settingsLinks - The settings links to be displayed in the sidebar.
 * @param {simpleLink[]} props.optionsLinks - The optional options links to be displayed in the sidebar.
 * @param {userInfo} props.profileInformation - The user profile information.
 * @param {LogoInfo} props.logo - The logo information.
 * @param {generaleStyle} props.generalStyles - The general styles for the sidebar.
 * @param {() => void} props.logout - The function to handle logout.
 * @returns {JSX.Element} The rendered element.
 * @author GDG Algiers
 */


const SideBarWithSearch = (
    {
        logo,
        profileInformation,
        mainLinks,
        optionsLinks,
        settingsLinks,
        generalStyles,
        logout
    }:template1SidnavType
) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsExpanded(true);
    };
    const [instancesState,setInstancesState] = useState(mainLinks)
    const [settingsState,setSettingsState] = useState(settingsLinks)
    const [optionsState,setOptionsState] = useState(optionsLinks)
    const onSearch=(searchValue:string)=>{
        if(searchValue != ""){
            setInstancesState(prev=>{
                const filteredItems=prev.filter(state=>state?.name.includes(searchValue) || state.link.includes(searchValue))
                return filteredItems
            })
            setOptionsState(prev=>{
                const filteredItems=prev && prev.filter(state=>state.name.includes(searchValue) || state.link.includes(searchValue))
                return filteredItems
            })
            setSettingsState(prev=>{
                const filteredItems=prev.filter(state=>state.name.includes(searchValue) || state.link.includes(searchValue))
                return filteredItems
            })
        }else{
            setInstancesState(mainLinks)
            setSettingsState(settingsLinks)
            setOptionsState(optionsLinks)
        }
    }
    const untoggleSidebar = () => {
        setIsExpanded(false);
    };
    return (
        <div className="scroll flex flex-col pt-4 pb-3 items-center h-screen max-h-screen overflow-y-scroll rounded-r-xl "
            style={{
                width: isExpanded ? "250px" : "80px",
                backgroundColor: generalStyles.background || "#171918",
            }}
        >
            <Header logo={logo} isExpanded={isExpanded} toggleSidebar={toggleSidebar} untoggleSidebar={untoggleSidebar} logoTextSize={""} />
            <div style={{backgroundColor:"#FFFFFF26"}} className={`py-[0.6px] rounded-sm mx-2 my-4 ${isExpanded ? " w-2/3" : " w-1/3"}`}></div>
            <InstancesSection onSearch={onSearch} instances={instancesState} isExpanded={isExpanded} toggleSidebar={toggleSidebar} textSize={generalStyles.textSize} activeTextColor={generalStyles.activeTextColor} textColor={generalStyles.textColor} activeBg={generalStyles.activeBg}/>
            <div style={{backgroundColor:"#FFFFFF26"}} className={`py-[0.6px] rounded-sm mx-2 my-4 ${isExpanded ? " w-2/3" : " w-1/3"}`}></div>
            <OptionsSection options={optionsState} isExpanded={isExpanded} textColor={generalStyles.textColor} textSize={generalStyles.textSize} />
            <SettingsSection settings={settingsState} isExpanded={isExpanded} textColor={generalStyles.textColor} textSize={generalStyles.textSize} />
            <div style={{backgroundColor:"#FFFFFF26"}} className={`py-[0.6px] rounded-sm mx-2 my-4 ${isExpanded ? " w-2/3" : " w-1/3"}`}></div>
            <Footer logout={logout} profileInformation={profileInformation} isExpanded={isExpanded} textColor={generalStyles.textSize}/>
        </div>
    );
}

export default SideBarWithSearch;