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
    <form>
      <div className="relative flex justify-center cursor-text">
        <input 
        ref={inputRef}
        type="text"
        className={"text-[#7F8080] block text-sm rounded-lg p-2.5 pl-8  bg-[#3A3B3B] outline-none appearance-none" + (isExpanded ? " w-3/4" : " w-10")}
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
    </form>
  )
}

export default SearchField