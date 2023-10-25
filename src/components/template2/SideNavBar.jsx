import Image from "next/image";
import Link from "next/link";
import Pic from "public/Images/template2/picture.png";
import Arrow from "public/Images/template2/Down.svg";
import Support from "public/Images/template2/Support.png";
import Collapse from "public/Images/template2/Subtract.svg";
import LinkList from "./LinkList";
import { useState } from "react";

const SideNavBar = ({
  isLogedIn,
  logo,
  links,
  generaleStyles,
  layoutStyles,
  buttonsActions,
}) => {
  const [Open, setOpen] = useState(true);
   const { textSize, textColor, HoverColor, BorderColor } = generaleStyles;
  return (
    <nav style={{ fontSize: `${textSize}`, color: `${textColor}` }}
      className={`no-scrol transition-all flex flex-col items-center justify-between h-[100vh] gap-8  overflow-y-scroll overflow-x-hidden bg-white duration-300 ${
        Open ? "w-80 px-6 py-5" : "w-20 py-0 px-1"
      }`}
    >
      {/* a Wrapper div  */}
      <div className="w-full mt-2">
        {/* Profile pic and preview */}
        {isLogedIn && (
          <div
            className={`flex justify-center items-center rounded-3xl w-full text-primary duration-100 ${
              Open ? "border-2 py-2 gap-2" : "p-0 my-6 border-0"
            }`}
          >
            <Image src={logo} alt="Profile Picture" className="w-12" />
            <div className={`px-3 duration-300 ${!Open && "hidden px-2"}`}>
              <h1 className="text-lg font-bold ">Kate Russell</h1>
              <p className="text-sm opacity-50">Project Manager</p>
            </div>
            {/* <Link href={"/"}>
              <Image
                src={Arrow}
                className={`duration-300 ${!Open && "hidden"}`}
              />
            </Link> */}
          </div>
        )}
        {/* Links Overview */}
        <LinkList links={links} Open={Open} generaleStyles={generaleStyles} />
      </div>
      {/* Wrapper Div */}
      <div className="w-full">
        <Link href={"/"} className="">
          {
            (Open)
            ?
            <div className="flex items-center justify-center gap-4 px-6 py-3 border-2 border-gray-300 rounded-2xl">
              <Image alt="Support" src={Support} />
              <div>
                <h1 className="text-lg font-bold text-primary">Help Center</h1>
                <p className="text-sm opacity-50 text-primary">Answer Here</p>
              </div>
              <Image src={Arrow} className="-rotate-90" />
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
                    className={`text-lg font-medium duration-300 text-gray-400 ${
                      !Open && "scale-0"
                    }`}
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
