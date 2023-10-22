import Image from "next/image";
import logo from "../../../public/Images/SideBarWithSearch/logo.svg";
import closeArrow from "../../../public/Images/SideBarWithSearch/close_arrow.svg";

const Header = ({isExpanded ,name, untoggleSidebar ,logo,logoTextSize}) => {
  return (
    <div className="flex items-center justify-center text-[#27AE60] gap-2 font-semibold text-lg w-full">
        {logo}
        {isExpanded && <h1 style={{fontSize:logoTextSize}} > {name} </h1>}
        {isExpanded && <Image src={closeArrow} alt="closeArrow" width={20} onClick={untoggleSidebar} className="mt-1 hover:cursor-pointer"/>}
    </div>
  )
}

export default Header