import Image from "next/image";
import Link from "next/link";
import Arrow from "public/Images/template2/Down.svg";
import Support from "public/Images/template2/Support.png";
import Collapse from "public/Images/template2/Subtract.svg";
import LinkList from "./LinkList";
import { useState } from "react";
import { userInfo } from "../../types/userInfoType";
import { ListLink } from "../../types/linkType";
import { generaleStyle } from "../../types/generaleStyleType";

type Props = {
  user: userInfo
  links: ListLink[]
  generaleStyles: generaleStyle
}

const SideNavBar = ({
  user,
  links,
  generaleStyles
} : Props) => {
  const [Open, setOpen] = useState<boolean>(true);
  const { textSize, textColor, BackgroundColor } = generaleStyles;
  return (
    <nav
      style={{
        fontSize: `${textSize || "16px"}`,
        color: `${textColor}`,
        backgroundColor: `${BackgroundColor}`,
      }}
      className={`no-scrol flex flex-col items-center justify-between h-[100vh] gap-8 overflow-y-scroll overflow-x-hidden duration-300 ${
        Open ? "w-80 px-4 md:px-6 py-5" : "w-20 py-0 px-0"
      }`}
    >
      {/* a Wrapper div  */}
      <div className="w-full mt-2">
        {/* Profile pic and preview */}
          <div
            className={`flex justify-center flex-wrap items-center rounded-3xl w-full duration-100 ${
              Open ? "border-2 py-2 gap-2" : "p-0 my-6 border-0"
            }`}
          >
            <Image src={user.image} alt="Profile Picture" className="w-12" />
            <div className={`px-3 duration-300 flex flex-col items-center ${!Open && "hidden px-2"}`}>
              <h1 className="text-lg font-bold ">{user.name}</h1>
              <p className="text-sm opacity-50">{user.role}</p>
            </div>
          </div>
        {/* Links Overview */}
        <LinkList
          links={links}
          Open={Open}
          setOpen={setOpen}
          generaleStyles={generaleStyles}
        />
      </div>
      {/* Wrapper Div */}
      <div className="w-full px-1">
        <Link href={"/"} className="">
          {
            (Open)
            ?
            <div className="flex flex-wrap items-center justify-center gap-0 sm:gap-2 px-4 md:px-6 py-3 border-2 border-gray-300 rounded-2xl">
              <Image alt="Support" src={Support} />
              <div>
                <h1 className="text-lg font-bold">Help Center</h1>
                <p className="text-sm opacity-50">Answer Here</p>
              </div>
              <Image src={Arrow} alt="Arrow" className="-rotate-90" />
            </div>
            :
            <div className="flex justify-center p-2 drop-shadow-xl rounded-xl hover:bg-zinc-300">
              <Image alt="Support" src={Support} />
            </div>
          }
        </Link>
        <div
          className={``}
          onClick={() => {
            setOpen(!Open);
          }}
        >
          <ul
            className={`flex flex-col ${Open && "pt-2"} `}
            onClick={() => {
              setOpen(!Open);
            }}
          >
            <li className="items-center p-4">
              <Link href={"/"}>
                <div className="flex items-center w-full gap-4">
                  <Image src={Collapse} alt="Collapse" />
                  <h1
                    className={`flex font-medium duration-300 text-gray-500 ${
                      !Open && "hidden"
                    }`}
                    style={{ color: "rgb(107 114 128)" }}
                  >
                    Overview
                  </h1>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNavBar;
