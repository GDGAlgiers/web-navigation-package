import Image from "next/image"
import Link from "next/link"

const OptionsSection = ({options,isExpanded , textColor,textSize}) => {
  return (
      <div className="flex flex-col w-full gap-4 mb-5">
          {
              options.map((option , index)=>(
                  <Link href={option.route} key={index}>
                      <div className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4 px-12" : "justify-center"}`}>
                          {option.image}
                          {isExpanded && <h1 style={{fontSize:textSize,color:textColor}}>{option.text}</h1>}
                      </div>
                  </Link>
              ))
          }
      </div>
  )
}

export default OptionsSection