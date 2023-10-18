import Image from "next/image";
import searchLoop from "../../../public/Images/SideBarWithSearch/search_logo.svg";
import { useRef } from "react";

const SearchField = ({isExpanded , placeholder, options , toggleSidebar}) => {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      toggleSidebar();
    }
  };
  
  return (
      <div className="relative w-[75%] flex justify-center  text-sm cursor-text bg-[#3A3B3B] rounded-lg" >
        <input 
        ref={inputRef}
        type="text"
        className={"text-[#7F8080] block text-sm bg-[#3A3B3B] p-2.5 pl-8  outline-none appearance-none" + (isExpanded ? " w-3/4" : " w-10")}
        placeholder={isExpanded ? placeholder : ""}
        onFocus={toggleSidebar}
        {...options}
        />
        <Image
        src={searchLoop} 
        alt="search"
        onClick={handleImageClick} 
        className={`absolute top-3.5 left-3.5 ${isExpanded && "absolute top-3.5 left-10"}`}
        />
       </div>
  )
}

export default SearchField