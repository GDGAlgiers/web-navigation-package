import Image from "next/image"
import logout from "../../../public/Images/SideBarWithSearch/logout.svg"

const Footer = ({profileInformation , isExpanded,textColor}) => {
  if(!isExpanded) return profileInformation.profilePicture;
  return (
      <div className="flex items-center justify-between w-full px-4">
              {profileInformation.profilePicture}
              <div>
                  <h1 style={{color:textColor}}>{profileInformation.fullName}</h1>
                  <p style={{color:textColor}} className=" text-xs font-light">{profileInformation.companyName}</p>
              </div>
          <Image src={logout} alt="logout" className="hover:cursor-pointer"/>
      </div>
  );
}

export default Footer