import Link from "next/link";
import SearchField from "./SearchField.tsx";
import React, { useState } from "react";
import { simpleLink } from "../../types/linkType";

interface props {
  searchBarCustomization: any;
  instances: simpleLink[];
  isExpanded: boolean;
  toggleSidebar: any;
  textColor: any;
  textSize: any;
  activeTextColor: any;
  activeBg: any;
  onSearch: any;
}
const InstancesSection = ({
  searchBarCustomization,
  instances,
  isExpanded,
  toggleSidebar,
  textColor,
  textSize,
  activeTextColor,
  activeBg,
  onSearch,
}: props) => {
  const [selectedInstanceIndex, setSelectedInstanceIndex] = useState(-1);
  const handleClickEvent = (index: any) => {
    setSelectedInstanceIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <SearchField
        onSearch={onSearch}
        searchBarCustomization={searchBarCustomization}
        isExpanded={isExpanded}
        toggleSidebar={toggleSidebar}
      />
      {instances.map((instance, index) => (
        <>
          <Link
            href={instance.link}
            className={`flex items-center hover:cursor-pointer bg-[#171918] w-full h-[6vh] relative ${
              isExpanded ? "gap-4 px-12" : "justify-center"
            }`}
            onClick={() => handleClickEvent(index)}
            key={index}
            style={{ backgroundColor: "#171918" }}
          >
            {index === selectedInstanceIndex && (
              <div
                style={{ backgroundColor: activeBg }}
                className="absolute top-0 right-0 w-[5px] h-full rounded-l"
              />
            )}
            {instance.icon}
            {isExpanded && (
              <h1
                style={{
                  color:
                    index === selectedInstanceIndex
                      ? activeTextColor
                      : textColor,
                  fontSize: "0.75rem",
                }}
              >
                {instance.name}
              </h1>
            )}
          </Link>
        </>
      ))}
    </div>
  );
};

export default InstancesSection;
