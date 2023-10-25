import Image from "next/image";
import Link from "next/link";
import Pic from "public/Images/template2/picture.png";
import Arrow from "public/Images/template2/Down.svg";
import Support from "public/Images/template2/Support.png";
import Collapse from "public/Images/template2/Subtract.svg";
import LinkList from "./LinkList";
import { useState } from "react";

const SideNavBar = ({
  user,
  links,
  generaleStyles,
  layoutStyles,
  buttonsActions,
}) => {
  const [Open, setOpen] = useState(true);
   const { textSize, textColor, BackgroudColor } = generaleStyles;
  return (
    <nav
      style={{
        fontSize: `${textSize}`,
        color: `${textColor}`,
        backgroundColor: `${BackgroudColor}`,
      }}
      className={`no-scrol flex flex-col items-center justify-between h-[100vh] gap-8  overflow-y-scroll overflow-x-hidden duration-300 ${
        Open ? "w-80 px-6 py-5" : "w-20 py-0 px-0"
      }`}
    >
      {/* a Wrapper div  */}
      <div className="w-full mt-2">
        {/* Profile pic and preview */}
        {user.isLogedIn && (
          <div
            className={`flex items-center justify-evenly rounded-3xl w-full text-primary duration-100 ${
              Open ? "px-3 border-2 py-2" : "p-0 my-6 border-0"
            }`}
          >
            <Image src={user.image} alt="Profile Picture" className="w-12" />
            <div className={`px-3 duration-300 ${!Open && "hidden px-2"}`}>
              <h1 className="text-lg font-bold ">{user.name}</h1>
              <p className="text-sm opacity-50">{user.role}</p>
            </div>
            <Link href={"/"}>
              <Image
                src={Arrow}
                className={`duration-300 ${!Open && "hidden"}`}
              />
            </Link>
          </div>
        )}
        {/* Links Overview */}
        <LinkList links={links} Open={Open} generaleStyles={generaleStyles} />
      </div>
      {/* Wrapper Div */}
      <div className="w-full">
        <Link href={"/"} className="">
          <div className="flex items-center justify-center gap-4 px-6 py-3 border-2 rounded-2xl">
            <Image alt="Support" src={Support} />
            <div style={{ fontSize: `${textSize}`, color: `${textColor}` }}>
              <h1 className="text-lg font-bold ">Help Center</h1>
              <p className="text-sm opacity-50 ">Answer Here</p>
            </div>
            <Image src={Arrow} className="-rotate-90" />
          </div>
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
                    className={` font-medium duration-300 text-gray-500 ${
                      !Open && "scale-0"
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
