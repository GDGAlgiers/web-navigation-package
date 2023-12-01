import Image from "next/image"
import logoutI from "/public/Images/SideBarWithSearch/logout.svg"
import { userInfo } from "../../../types/userInfoType";

interface props{
    profileInformation:userInfo , 
    isExpanded:boolean,textColor:any,logout:()=>void
}
const Footer = ({profileInformation , isExpanded,textColor, logout}:props) => {
  if(!isExpanded) return <Image src={profileInformation.image} alt={profileInformation.name as string} />;
  return (
      <div className="flex items-center justify-between w-full px-4">
              <Image src={profileInformation.image} alt={profileInformation.name as string} />
              <div>
                  <h1 style={{color:textColor}}>{profileInformation.name}</h1>
                 { profileInformation.additionalInfo && <p style={{color:textColor}} className=" text-xs font-light">{profileInformation.name}</p>}
              </div>
         <div onClick={logout}><Image src={logoutI} alt="logout" className="hover:cursor-pointer"/></div> 
      </div>
  );
}

export default Footer