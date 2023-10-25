import SeperatingLine from "./SeperatingLine";
import Footer from "./Footer";
import Header from "./Header";
import InstancesSection from "./InstancesSection";
import SettingsSection from "./SettingsSection";
import OptionsSection from "./OptionsSection";
import { useState } from "react";
const SideBarWithSearch = (
    {
        loggedIn,
        logo,
        name,
        profileInformation,
        instances,
        options,
        settings,
        searchBarCustomization,
        generalStyles,
    }
) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleSidebar = () => {
        setIsExpanded(true);
    };
    const [instancesState,setInstancesState] = useState(instances)
    const [settingsState,setSettingsState] = useState(settings)
    const [optionsState,setOptionsState] = useState(options)
    const onSearch=(searchValue)=>{
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
            setInstancesState(instances)
            setSettingsState(settings)
            setOptionsState(options)
        }
    }
    const untoggleSidebar = () => {
        setIsExpanded(false);
    };

    const {textSize, logoTextSize, textColor, activeTextColor, bg, activeBg , seperatingLineColor} = generalStyles;
    return (
        <div className="scroll flex flex-col pt-8 pb-2 items-center h-screen max-h-screen overflow-y-scroll rounded-r-xl "
            style={{
                width: isExpanded ? "250px" : "60px",
                backgroundColor:bg,
            }}
        >
            <Header logo={logo} name={name} isExpanded={isExpanded} untoggleSidebar={untoggleSidebar} logoTextSize={logoTextSize} />
            <SeperatingLine isExpanded={isExpanded} seperatingLineColor={seperatingLineColor}/>
            <InstancesSection onSearch={onSearch} searchBarCustomization={searchBarCustomization} instances={instancesState} isExpanded={isExpanded} toggleSidebar={toggleSidebar} textSize={textSize} activeTextColor={activeTextColor} bg={bg} textColor={textColor} activeBg={activeBg}/>
            <SeperatingLine isExpanded={isExpanded} seperatingLineColor={seperatingLineColor}/>
            <OptionsSection options={optionsState} isExpanded={isExpanded} textColor={textColor} textSize={textSize} />
            <SettingsSection settings={settingsState} isExpanded={isExpanded} textColor={textColor} textSize={textSize} />
            <SeperatingLine isExpanded={isExpanded} seperatingLineColor={seperatingLineColor}/>
            {loggedIn && <Footer profileInformation={profileInformation} isExpanded={isExpanded} textColor={textColor}/>}
        </div>
    );
}

export default SideBarWithSearch;