import Image from "next/image";

const Instance = ({imageSource ,imageAlt,instanceText, isSelected , isExpanded,onClick })=>{
    return (
        <div 
        className={`flex items-center hover:cursor-pointer bg-[#171918] w-full h-[6vh] relative ${isExpanded ? "gap-4 px-12" : "justify-center"}`}
        onClick={onClick}
        >
            {isSelected && <div className="absolute top-0 right-0 w-[5px] bg-[#27AE60] h-full rounded-l" />}
            <Image
            src={imageSource}
            alt={imageAlt}
            className="text-[#27AE60]"
            width={15}
            />
            {isExpanded && <h1 className={isSelected ? "text-white" : "text-[#969998]"}>{instanceText}</h1>}
        </div>
    );
}

export default Instance;