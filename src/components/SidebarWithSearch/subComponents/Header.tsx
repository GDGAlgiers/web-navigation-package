import closeArrow from "/public/Images/SideBarWithSearch/close_arrow.svg";
import { LogoInfo } from "@/types/logoType";

interface headerProps{
  logo:LogoInfo,
  isExpanded:boolean , 
  untoggleSidebar:any ,
  logoTextSize:string,
  toggleSidebar: any
}
const Header = ({logo, isExpanded, untoggleSidebar, toggleSidebar}:headerProps) => {
  return (
    <div className="pl-4 flex items-center justify-center text-[#27AE60] gap-2 font-semibold text-lg w-full">
        <img src={logo.logoIcon} onClick={toggleSidebar} alt={logo.title as string} />{}
        {isExpanded && <img src={closeArrow} alt="closeArrow" width={20} onClick={untoggleSidebar} className="mt-1 hover:cursor-pointer"/>}
    </div>
  )
}

export default Header