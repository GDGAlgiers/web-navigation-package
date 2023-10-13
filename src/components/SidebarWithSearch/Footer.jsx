import Image from "next/image"
import logout from "../../../public/Images/SideBarWithSearch/logout.svg"
const Footer = ({profilePicture ,fullname, companyName, isExpanded}) => {
  return (
    <div className="flex items-center justify-between w-full px-4">
        <Image src={profilePicture} alt="profile picture" />
        {isExpanded && <>
        <div>
            <h1 className="text-[#969998]">{fullname}</h1>
            <p className="text-[#969998] text-xs font-light">{companyName}</p>
        </div>

            <Image src={logout} alt="logout" className="hover:cursor-pointer"/>
        </>}
    </div>
  )
}

export default Footer