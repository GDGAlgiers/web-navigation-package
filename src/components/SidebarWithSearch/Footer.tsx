import Image from "next/image"
import logout from "../../../public/Images/SideBarWithSearch/logout.svg"
import { userInfo } from "../../types/userInfoType";

interface props{
    profileInformation:userInfo , 
    isExpanded:boolean,textColor:any,logout:()=>void
}
const Footer = ({profileInformation , isExpanded,textColor}:props) => {
  if(!isExpanded) return profileInformation.image;
  return (
      <div className="flex items-center justify-between w-full px-4">
              {profileInformation.image}
              <div>
                  <h1 style={{color:textColor}}>{profileInformation.name}</h1>
                 { profileInformation.additionalInfo && <p style={{color:textColor}} className=" text-xs font-light">{profileInformation.companyName}</p>}
              </div>
         <div onClick={logout}><Image src={logout} alt="logout" className="hover:cursor-pointer"/></div> 
      </div>
  );
}

export default Footer