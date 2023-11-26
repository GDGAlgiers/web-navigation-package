import Image from "next/image";
import closeArrow from "../../../public/Images/SideBarWithSearch/close_arrow.svg";
import { LogoInfo } from "@/types/logoType";

interface headerProps{
  logo:LogoInfo,
  isExpanded:boolean , 
  untoggleSidebar:any ,
  logoTextSize:string
}
const Header = ({logo,isExpanded , untoggleSidebar}:headerProps) => {
  return (
    <div className="flex items-center justify-center text-[#27AE60] gap-2 font-semibold text-lg w-full">
        {logo.logoIcon}
        {isExpanded && <h1 style={{fontSize:"1.25rem"}} > {logo.title} </h1>}
        {isExpanded && <Image src={closeArrow} alt="closeArrow" width={20} onClick={untoggleSidebar} className="mt-1 hover:cursor-pointer"/>}
    </div>
  )
}

export default Header