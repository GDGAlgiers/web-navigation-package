import Image from "next/image"
import heart from "../../../public/Images/SideBarWithSearch/heart.svg"
import gallery from "../../../public/Images/SideBarWithSearch/gallery.svg"
import cart from "../../../public/Images/SideBarWithSearch/cart.svg"

const OptionsSection = ({isExpanded}) => {
  return (
    <div className="flex flex-col w-full gap-6 ">
        <div className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4 px-12" : "justify-center"}`}>
            <Image src={heart} alt="heart" width={15}/>
            {isExpanded && <h1 className="text-[#969998]">My gallery</h1>}
        </div>
        <div className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4 px-12" : "justify-center"}`}>
            <Image src={gallery} alt="gallery" width={15}/>
            {isExpanded && <h1 className="text-[#969998]">Favourites</h1>}
        </div>
        <div className={`flex items-center w-full hover:cursor-pointer ${isExpanded ? "gap-4 px-12" : "justify-center"}`}>
            <Image src={cart} alt="cart" width={15}/>
            {isExpanded && <h1 className="text-[#969998]">My Cart</h1>}
        </div>
    </div>
  )
}

export default OptionsSection