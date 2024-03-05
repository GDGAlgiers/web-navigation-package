"use client";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { FiX } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { generaleStyle } from "@/types/generaleStyleType";
import { simpleLink } from "@/types/linkType";
import { LogoInfo } from "@/types/logoType";
import { userInfo } from "@/types/userInfoType";

interface ILinkExplorerProps {
  Style: generaleStyle;
  links: simpleLink[];
  LogoInf: LogoInfo;
  menuType: string;
  loggedIn: boolean;
  loginRoute: string;
  SignInRoute: string;
  User: userInfo;
}

/**
 * @component LinkExplorer - A responsive React/Next functional component for a navigation bar.
 *
 * @example
 * // Example usage of LinkExplorer
 * import UserProfileImage from "my_image_source1"
 * import {HomeIcon, AboutIcon} from "my_icons_source2"
 * import YourLogoComponent from "my_image_source3"
 *
 * //? stands for optional element
 * const LinkExplorerProps = {
 *   Style: {
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
 *   links: [
 *     { name: 'Home', link: '/home' },
 *     { name: 'About', link: '/about' },
 *     // Add more links as needed
 *   ],
 *   LogoInf: { ?title: 'Company: GDG Algiers', logoIcon: YourLogoComponent },
 *   menuType: 'Burger',
 *   loggedIn: false,
 *   loginRoute: '/login',
 *   SignInRoute: '/signin',
 *   User: {
 *     image: UserProfileImage,
 *     ?name: 'Okba ALLAOUA',
 *     ?additionalInfo?: "I am the GDG Open source team leader"
 *     ?role: "Manager",
 *   },
 * };
 *
 * <LinkExplorer {...LinkExplorerProps} />
 *
 * @param {ILinkExplorerProps} props The props for the component.
 * @returns {JSX.Element} The rendered element.
 * @author GDG Algiers
 */

const LinkExplorer = (props: ILinkExplorerProps) => {
  const {
    Style,
    links,
    LogoInf,
    menuType,
    loggedIn,
    loginRoute,
    SignInRoute,
    User
  } = props;
  const { background, textColor, textSize, ButtonColor } = Style;

  const [menu, setMenu] = useState(false);
  const Menu = () => {
    if (menuType == "Burger") {
      return (
        <GrMenu
          className="text-2xl cursor-pointer "
          onClick={() => setMenu(true)}
        />
      );
    }
    if (menuType == "bottom-bar") {
      return (
        <RiMenu2Fill
          className="text-2xl cursor-pointer "
          onClick={() => setMenu(true)}
        />
      );
    }
  };
  return (
    <>
      {/* Big Screens */}
      <div
        style={{ background: `${background}` }}
        className={` items-center justify-between px-3 w-full bg-[#fff] h-24 fixed top-0 hidden lg:flex `}
      >
        <div className="flex items-center gap-10">
          <img
            alt="Logo"
            src={LogoInf.logoIcon}
            className="max-h-16 w-auto"
          />
          <div
            style={{ color: `${textColor}`, fontSize: `${textSize}` }}
            className={`flex items-center gap-16 `}
          >
            {links.map((link, index) => {
              return (
                <Link key={index} href={`${link.link} `}>
                  {link.icon}{" "}
                  {link.name}{" "}
                </Link>
              );
            })}
          </div>
        </div>
        {loggedIn ? (
          <img alt="profilpic" src={User.image} />
        ) : (
          <div className="flex items-center gap-3 ">
            <Link href={loginRoute}>
              <button
                style={{ borderColor: `${ButtonColor}` }}
                className="rounded-[4px] text-[#3A4F39] w-28 text-lg p-2 border "
              >
                {" "}
                Log In{" "}
              </button>
            </Link>
            <Link href={SignInRoute}>
              <button
                style={{ background: `${ButtonColor}` }}
                className="rounded-[4px] bg-[#3A4F39] text-white w-28 text-lg p-2 border "
              >
                {" "}
                Sign In{" "}
              </button>
            </Link>
          </div>
        )}
      </div>
      {/* Small Screens */}
      <div
        className={`flex relative items-center justify-between px-2 w-full bg-[#fff] h-16 top-0 lg:hidden `}
      >
        {menu && (
          <div className="absolute bg-white translate-y-[100%] bottom-0 left-0 right-0 w-full p-3 flex flex-col gap-3 border-t border-t-[#A0A0A0] text-sm md:text-base ">
            {links.map((link, index) => {
              return (
                <Link key={index} className="pl-3" href={`${link.link} `}>
                  {link.icon}{" "}
                  {link.name}{" "}
                </Link>
              );
            })}
            {!loggedIn && (
              <Link
                href={loginRoute}
                className="border-t border-t-[#A0A0A0] py-5 pl-8 cursor-pointer "
              >
                {" "}
                Log In{" "}
              </Link>
            )}
          </div>
        )}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 ">
          {menu ? (
            <FiX
              className="text-2xl cursor-pointer "
              onClick={() => setMenu(false)}
            />
          ) : (
            <Menu />
          )}
          <img
            alt="Logo"
            src={LogoInf.logoIcon}
            className="max-h-10 w-auto"
          />
        </div>
        {loggedIn ? (
          <img alt="profilpic" src={User.image} />
        ) : (
          <Link href={SignInRoute}>
            <button
              style={{ background: `${ButtonColor}` }}
              className="rounded-[4px] text-white text-xs w-20 md:text-sm md:w-24 p-2 border "
            >
              {" "}
              Sign In{" "}
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default LinkExplorer;
