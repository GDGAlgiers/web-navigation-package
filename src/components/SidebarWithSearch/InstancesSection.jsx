'use client'

import Instance from "./Instance"
import objectsSets from "../../../public/Images/SideBarWithSearch/object_sets.svg"
import singleObjects from "../../../public/Images/SideBarWithSearch/single_objects.svg"
import weeklyTop from "../../../public/Images/SideBarWithSearch/weekly_top.svg"
import SearchField from "./SearchField"
import { useState } from "react"

const InstancesSection = ({isExpanded}) => {
    const [selectedInstanceIndex,setSelectedInstanceIndex] = useState(0);
    const handleClickEvent =(index)=>{
        console.log(index)
        setSelectedInstanceIndex(index);
    };
    const Instances = [
        {
            key:1,
            imageSource: weeklyTop,
            imageAlt: "weekly top",
            text:"Weekly top"
        },
        {
            key:2,
            imageSource: singleObjects,
            imageAlt: "Single objects",
            text:"Single objects"
        },
        {
            key:3,
            imageSource: objectsSets,
            imageAlt: "Objects sets",
            text:"Objects sets"
        },
    ];
  return (
    <div className="flex flex-col w-full gap-2">
        <SearchField />
        {Instances.map((instance,index)=>(
                <Instance 
                    key={instance.key} 
                    imageSource={instance.imageSource} 
                    imageAlt={instance.imageAlt}
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