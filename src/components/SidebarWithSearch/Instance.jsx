import Image from "next/image";
import Link from "next/link";

const Instance = ({image, instanceText, isSelected ,link, isExpanded, onClick, textColor, textSize,activeTextColor,activeBg,bg })=>{
    return (
        <Link
            href={link}
            className={`flex items-center hover:cursor-pointer bg-[#171918] w-full h-[6vh] relative ${isExpanded ? "gap-4 px-12" : "justify-center"}`}
            onClick={onClick}
            style={{backgroundColor:bg}}
        >
            {isSelected && <div style={{backgroundColor:activeBg}} className="absolute top-0 right-0 w-[5px] h-full rounded-l" />}
            {image}
            {isExpanded && <h1 style={{color:isSelected ? activeTextColor : textColor, fontSize:textSize}} >{instanceText}</h1>}
        </Link>
    );
}

export default Instance;