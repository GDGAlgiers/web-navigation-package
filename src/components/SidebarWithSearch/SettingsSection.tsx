import Link from "next/link"
import { simpleLink } from "../../types/linkType";
interface props{
  settings:simpleLink[],isExpanded:boolean,textSize:string,textColor:string
}
const SettingsSection = ({settings,isExpanded,textSize,textColor}:props) => {
  return (
    <div className="flex flex-col w-full gap-4 mt-auto mb-4">
        {
            settings.map((item,index)=>
                <Link href={item.link} key={index} className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4 px-12" : "justify-center"}`}>
                    {item.icon}
                    {isExpanded  && <h1 style={{fontSize:textSize,color:textColor}}>{item.name}</h1>}
                </Link>
            )
        }
    </div>
  )
}

export default SettingsSection;