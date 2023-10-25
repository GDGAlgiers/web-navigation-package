const SeperatingLine = ({isExpanded , seperatingLineColor}) => {
  return <div style={{backgroundColor:seperatingLineColor}} className={`py-[0.6px] rounded-sm mx-2 my-4 ${isExpanded ? " w-2/3" : " w-1/3"}`} ></div>
}

export default SeperatingLine;