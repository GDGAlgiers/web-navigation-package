import Image from "next/image"
import Link from "next/link"
const SettingsSection = ({settings,isExpanded,textSize,textColor}) => {
  return (
    <div className="flex flex-col w-full gap-4 mt-auto mb-4">
        {
            settings.map((item,index)=>
                <Link href={item.route} key={index} className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4 px-12" : "justify-center"}`}>
                    {item.image}
                    {isExpanded && <h1 style={{fontSize:textSize,color:textColor}}>{item.text}</h1>}
                </Link>
            )
        }
    </div>
  )
}

export default SettingsSection;