import Image from "next/image"
import settings from "../../../public/Images/SideBarWithSearch/settings.svg"
import disscussion from "../../../public/Images/SideBarWithSearch/disscussion.svg"

const SettingsSection = ({isExpanded}) => {
  return (
    <div className="flex flex-col w-full gap-4 mt-auto mb-4">
        <div className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4 px-12" : "justify-center"}`}>
            <Image src={settings} alt="settings" width={15}/>
            {isExpanded && <h1 className="text-[#969998] text-xs">Settings</h1>}
        </div>
        <div className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4  px-12" : "justify-center"}`}>
            <Image src={disscussion} alt="disscussion" width={15}/>
            {isExpanded && <h1 className="text-[#969998] text-xs">FAQ</h1>}
            </div>
    </div>
  )
}

export default SettingsSection;