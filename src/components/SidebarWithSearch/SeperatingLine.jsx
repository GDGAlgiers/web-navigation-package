const SeperatingLine = ({isExpanded}) => {
  return <div className={`h-[1.8px] bg-[#FFFFFF26] rounded-sm mx-2 my-4 ${isExpanded ? " w-2/3" : " w-1/3"}`} ></div>
}

export default SeperatingLine;