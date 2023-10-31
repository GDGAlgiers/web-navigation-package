import Image from "next/image";
import searchLoop from "../../../public/Images/SideBarWithSearch/search_logo.svg";
import {useRef, useState} from "react";
interface props{
  isExpanded:boolean ,searchBarCustomization:any, toggleSidebar:any,onSearch:any
}
const SearchField = ({isExpanded , toggleSidebar,onSearch}:props) => {
  const inputRef = useRef(null);
  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      toggleSidebar();
    }
  };
  return (
      <div
          className="relative w-[75%] flex justify-center cursor-text rounded-lg"
          style={{backgroundColor:"#3A3B3B"}}
      >
        <input 
          ref={inputRef}
          type="text"
          className={"block p-2.5 pl-6 outline-none appearance-none rounded-lg" + (isExpanded ? " w-3/4" : " w-10")}
          placeholder={isExpanded ? "search" : ""}
          onFocus={toggleSidebar}
          onChange={(e)=>onSearch(e.target.value)}
          style={{backgroundColor:"#3A3B3B" , fontSize:"0.8rem", color:"#7F8080"}}
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