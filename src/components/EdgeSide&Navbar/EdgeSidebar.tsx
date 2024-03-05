import Link from "next/link";
import Arrow from "public/Images/template2/Down.svg";
import { FaAngleDown } from "react-icons/fa6";
import Support from "public/Images/template2/Support.png";
import Collapse from "public/Images/template2/Subtract.svg";
import LinkList from "./subComponents/LinkList";
import { useState } from "react";
import { userInfo } from "../../types/userInfoType";
import { ListLink } from "../../types/linkType";
import { generaleStyle } from "../../types/generaleStyleType";

type Props = {
  user: userInfo
  links: ListLink[]
  generaleStyles: generaleStyle
}

/**
 * @component EdgeSidebar - A responsive React functional component for a side navigation bar.
 *
 * @example
 * // Example usage of EdgeSidebar
 * import {HomeIcon, AboutIcon, PageIcon, InfoIcon} from "my_image_source1"
 * import UserProfileImage from "my_image_source2"
 * 
 * //? stands for optional element
 * const EdgeSidebarProps = {
 *   user: {
 *     image: UserProfileImage,
 *     ?name: 'Rayan ALLALI',
 *     ?role: 'Admin',
 *     ?additionalInfo: "GDG Algiers Open Source Team Lead"
 *   },
 *   links: [
 *     {
 *       ?icon: HomeIcon,
 *       name: 'Home',
 *       link: [
 *         { ?icon: PageIcon, name: 'Page 1', link: '/page1' },
 *         { ?icon: PageIcon, name: 'Page 2', link: '/page2' },
 *       ],
 *       currentLink: "/"
 *     },
 *     {
 *       ?icon: AboutIcon,
 *       name: 'About',
 *       link: [{ ?icon: InfoIcon, name: 'About Us', link: '/about' }],
 *       currentLink: "/about"
 *     },
 *   ],
 *   generaleStyles: {
 *     textColor: '#333333',
 *     ?activeBg: '#f0f0f0',
 *     ?activeTextColor: '#007bff',
 *     ?background: '#ffffff',
 *     textSize: '16px',
 *     ?HoverTextColor: '#555555',
 *     ?HoverBgColor: '#f0f0f0',
 *     ?BackgroundColor: '#ffffff',
 *     ?ActiveTextColor: '#007bff',
 *     ?BorderColor: '#dddddd',
 *     ?ButtonColor: '#3498db',
 *   },
 * };
 *
 * <EdgeSidebar {...EdgeSidebarProps} />
 *
 * @param {Props} props The props for the component.
 * @param {userInfo} props.user The user information.
 * @param {ListLink[]} props.links The list of navigation links.
 * @param {generaleStyle} props.generaleStyles The styles for the side navigation bar.
 * @returns {JSX.Element} The rendered element.
 * @author GDG Algiers
 */

const EdgeSidebar = ({
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
            <img src={user.image} alt="Profile Picture" className="w-12" />
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
              <img alt="Support" src={Support.src} />
              <div>
                <h1 className="text-lg font-bold">Help Center</h1>
                <p className="text-sm opacity-50">Answer Here</p>
              </div>
              <img src={Arrow} alt="Arrow" className="-rotate-90" />
            </div>
            :
            <div className="flex justify-center p-2 drop-shadow-xl rounded-xl hover:bg-zinc-300">
              <img alt="Support" src={Support.src} />
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
                  <img src={Collapse} alt="Collapse" />
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

export default EdgeSidebar;
