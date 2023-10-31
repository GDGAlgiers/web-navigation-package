import Footer from "./Footer.tsx";
import Header from "./Header";
import InstancesSection from "./InstancesSection";
import SettingsSection from "./SettingsSection.tsx";
import OptionsSection from "./OptionsSection.tsx";
import React, { useState} from 'react';
import { generaleStyle } from "../../types/generaleStyleType";
import { userInfo } from "../../types/userInfoType";
import { simpleLink } from "../../types/linkType";


export interface template1SidnavType{
    mainLinks:simpleLink[],
    settingsLinks:simpleLink[],
    optionsLinks?:simpleLink[],
    profileInformation:userInfo,
    logo:LogoInfo,
    generalStyles:generaleStyle,
    logout:()=>void
}


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
                const filteredItems=prev.filter(state=>state.text.includes(searchValue) || state.route.includes(searchValue))
                return filteredItems
            })
            setOptionsState(prev=>{
                const filteredItems=prev.filter(state=>state.text.includes(searchValue) || state.route.includes(searchValue))
                return filteredItems
            })
            setSettingsState(prev=>{
                const filteredItems=prev.filter(state=>state.text.includes(searchValue) || state.route.includes(searchValue))
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
        <div className="scroll flex flex-col pt-8 pb-2 items-center h-screen max-h-screen overflow-y-scroll rounded-r-xl "
            style={{
                width: isExpanded ? "250px" : "60px",
                backgroundColor:"#171918",
            }}
        >
            <Header logo={logo} isExpanded={isExpanded} untoggleSidebar={untoggleSidebar} />
            <div style={{backgroundColor:"#FFFFFF26"}} className={`py-[0.6px] rounded-sm mx-2 my-4 ${isExpanded ? " w-2/3" : " w-1/3"}`} ></div>
            <InstancesSection onSearch={onSearch} instances={instancesState} isExpanded={isExpanded} toggleSidebar={toggleSidebar} textSize={generalStyles.textSize} activeTextColor={generalStyles.activeTextColor} textColor={generalStyles.textColor} activeBg={generalStyles.activeBg}/>
            <div style={{backgroundColor:"#FFFFFF26"}} className={`py-[0.6px] rounded-sm mx-2 my-4 ${isExpanded ? " w-2/3" : " w-1/3"}`} ></div>
            <OptionsSection options={optionsState} isExpanded={isExpanded} textColor={generalStyles.textColor} textSize={generalStyles.textSize} />
            <SettingsSection settings={settingsState} isExpanded={isExpanded} textColor={generalStyles.textColor} textSize={generalStyles.textSize} />
            <div style={{backgroundColor:"#FFFFFF26"}} className={`py-[0.6px] rounded-sm mx-2 my-4 ${isExpanded ? " w-2/3" : " w-1/3"}`} ></div>
            <Footer logout={logout} profileInformation={profileInformation} isExpanded={isExpanded} textColor={generalStyles.textSize}/>
        </div>
    );
}

export default SideBarWithSearch;