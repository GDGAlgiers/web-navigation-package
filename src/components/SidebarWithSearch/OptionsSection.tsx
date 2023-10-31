import Link from "next/link"
import { simpleLink } from "../../types/linkType";
interface props{
    options:simpleLink[],isExpanded:boolean, textColor:any,textSize:string
}
const OptionsSection = ({options,isExpanded , textColor,textSize}:props) => {
  return (
      <div className="flex flex-col w-full gap-4 mb-5">
          {
              options.map((option , index)=>(
                  <Link href={option.link} key={index}>
                      <div className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4 px-12" : "justify-center"}`}>
                          {option.icon}
                          {isExpanded && <h1 style={{fontSize:textSize,color:textColor}}>{option.name}</h1>}
                      </div>
                  </Link>
              ))
          }
      </div>
  )
}

export default OptionsSection