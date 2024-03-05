import { MdLogout } from "react-icons/md";
import { userInfo } from "../../../types/userInfoType";

interface props{
    profileInformation:userInfo , 
    isExpanded:boolean,textColor:any,logout:()=>void
}
const Footer = ({profileInformation , isExpanded,textColor, logout}:props) => {
  if(!isExpanded) return <img src={profileInformation.image} alt={profileInformation.name as string} />;
  return (
      <div className="flex items-center justify-between w-full px-4">
              <img src={profileInformation.image} alt={profileInformation.name as string} />
              <div>
                  <h1 style={{color:textColor}}>{profileInformation.name}</h1>
                 { profileInformation.additionalInfo && <p style={{color:textColor}} className=" text-xs font-light">{profileInformation.name}</p>}
              </div>
         <div onClick={logout}><MdLogout className="hover:cursor-pointer" size={20} /></div> 
      </div>
  );
}

export default Footer