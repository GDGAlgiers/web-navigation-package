import Instance from "./Instance"
import SearchField from "./SearchField"
import { useState } from "react"

const InstancesSection = ({ searchBarCustomization, instances ,isExpanded,toggleSidebar,textColor,textSize,activeTextColor,activeBg,bg,onSearch}) => {
    const [selectedInstanceIndex,setSelectedInstanceIndex] = useState(-1);
    const handleClickEvent =(index)=>{
        setSelectedInstanceIndex(index);
    };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
        <SearchField onSearch={onSearch} searchBarCustomization={searchBarCustomization} isExpanded={isExpanded} toggleSidebar={toggleSidebar}/>
        {instances.map((instance,index)=>(
                <Instance
                    textColor={textColor}
                    textSize={textSize}
                    activeTextColor={activeTextColor}
                    activeBg={activeBg}
                    bg={bg}
                    key={index}
                    image={instance.image}
                    link={instance.route}
                    isSelected={index===selectedInstanceIndex}
                    onClick={()=> handleClickEvent(index)}
                    isExpanded={isExpanded}
                    instanceText={instance.text}
                />
        ))}
    </div>
  )
}

export default InstancesSection