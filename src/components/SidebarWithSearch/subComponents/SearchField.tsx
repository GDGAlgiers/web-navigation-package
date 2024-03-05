import { CiSearch } from "react-icons/ci";
import {useRef} from "react";
interface props{
  isExpanded:boolean ,searchBarCustomization:any, toggleSidebar:any,onSearch:any
}
const SearchField = ({isExpanded , toggleSidebar,onSearch}:props) => {
  const inputRef = useRef(null);
  const handleImageClick = () => {
    if (inputRef.current) {
      (inputRef.current as any).focus();
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
          className={"p-2.5 pl-6 outline-none appearance-none flex items-center justify-center rounded-lg" + (isExpanded ? " w-3/4" : " w-10")}
          placeholder={isExpanded ? "search" : ""}
          onFocus={toggleSidebar}
          onChange={(e)=>onSearch(e.target.value)}
          style={{backgroundColor:"#3A3B3B" , fontSize:"0.8rem", color:"#7F8080"}}
        />
        <CiSearch onClick={handleImageClick} size={20}  className={`absolute top-3.5 left-3.5 ${isExpanded && "absolute top-3.5 left-10"}`} />
      </div>
  )
}

export default SearchField