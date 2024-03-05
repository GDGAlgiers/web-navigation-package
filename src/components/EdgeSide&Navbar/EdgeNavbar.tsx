import React, { useState } from "react";
import defaultLogo from "public/images/template2/Logo.png";

import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu as HamMenu } from "react-icons/gi";
import { BsThreeDotsVertical as KebabMenu } from "react-icons/bs";
import { AiOutlineClose as CloseMenu } from "react-icons/ai";
import Link from "next/link";
import MobileSearch from "./subComponents/MobileSearch";
import MobileMenu from "./subComponents/MobileMenu";
import { generaleStyle } from "../../types/generaleStyleType";
import { simpleLink } from "../../types/linkType";

type Props = {
  avatar: { picture: string, link: string },
  logo: any,
  isLoggedIn: boolean,
  loginButton: { text: string, link: string },
  links: simpleLink[],
  generaleStyles: generaleStyle,
  mobileSettings: {menuType: "hamburger" | "kebab"}
}

/**
 * @component EdgeNavbar - A responsive React functional component for a navigation bar.
 *
 * @example
 * // Example usage of EdgeNavbar
 * import LogoImage from "my_image_source1"
 * import UserProfileImage from "my_image_source2"
 * 
 * //? stands for optional element
 * const EdgenavbarProps = {
 *   avatar: { picture: UserProfileImage, link: 'profile' },
 *   logo: LogoImage,
 *   isLoggedIn: true,
 *   loginButton: { text: 'Get started', link: '/login' },
 *   links: [
 *     { name: 'Home', link: '/home' },
 *     { name: 'About', link: '/about' },
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
 *   mobileSettings: { menuType: 'hamburger' },
 * };
 *
 * <EdgeNavbar {...EdgenavbarProps} />
 *
 * @param {Props} props The props for the component.
 * @param {Object} props.avatar The avatar configuration.
 * @param {string} props.avatar.picture The source of the avatar picture.
 * @param {string} props.avatar.link The link associated with the avatar.
 * @param {*} props.logo The logo component.
 * @param {boolean} props.isLoggedIn Indicates whether the user is logged in.
 * @param {Object} props.loginButton The login button configuration.
 * @param {string} props.loginButton.text The text displayed on the login button.
 * @param {string} props.loginButton.link The link associated with the login button.
 * @param {ListLink[]} props.links The list of navigation links.
 * @param {generaleStyle} props.generaleStyles The styles for the navigation bar.
 * @param {Object} props.mobileSettings The mobile settings configuration.
 * @param {'hamburger' | 'kebab'} props.mobileSettings.menuType The type of mobile menu (hamburger or kebab).
 * @returns {JSX.Element} The rendered element.
 * 
 * @author GDG Algiers
 */

function EdgeNavbar(props : Props) {
  const {
    avatar ,
    logo = defaultLogo,
    isLoggedIn = false,
    loginButton = { text: "Get started", link: "#" }, //loginButton: {text,link}
    links = [], //links: [{link,name,icon}]
    generaleStyles: { textColor, textSize } = {},
    mobileSettings: { menuType = "hamburger" } = {}, //menuType: "hamburger" | "kebab",
  } = props;

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuMap = {
    kebab: () => (
      <KebabMenu
        className="lg:hidden h-6 w-auto cursor-pointer"
        onClick={handleOpenMenu}
      />
    ),
    hamburger: () => (
      <HamMenu
        className="lg:hidden h-6 w-auto cursor-pointer"
        onClick={handleOpenMenu}
      />
    ),
  };

  const handleOpenMenu = () => {
    setMenuOpen(true);
    setSearchOpen(false);
  };

  return (
    <div
      className="relative w-screen "
      style={{ color: textColor || "#2D2E2E", fontSize: textSize || 16 }}
    >
      <div className="flex  justify-between items-center bg-white h-24 w-full 2xl:px-16 xl:px-8 px-4">
        <div className="flex items-center justify-start h-ful xl:gap-20 2xl:gap-24 gap-10">
          {menuOpen ? (
            <CloseMenu
              className="lg:hidden h-6 w-auto cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            menuMap[menuType]()
          )}

          <img src={logo} alt="logo" className=" h-20" />

          {/* search bar */}
          <div
            className={`hidden md:flex my-5 h-auto 2xl:w-[510px] w-[400px] items-center rounded justify-between p-4 bg-Light-grey-input`}
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none pr-4 flex-grow"
            />
            <CiSearch size={20} />
          </div>
        </div>

        <div className="flex gap-8 items-center h-14">
          <ul className="hidden lg:flex gap-8 h-6 ">
            {links.map((item) => (
              <li>
                <Link href={item.link as unknown as string || "#"}>
                  <img src={item.icon} alt={item.name} className="h-full w-auto" />
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden"
            onClick={() => {
              setSearchOpen((prv) => !prv);
              setMenuOpen(false);
            }}
          >
            <CiSearch size={16} />
          </button>
          {isLoggedIn ? (
            <Link href={avatar.link}>
              <img src={avatar.picture} alt="" className="h-14 w-14 rounded-full" />
            </Link>
          ) : (
            <Link href={loginButton.link}>
              <button className="bg-[#3A4F39] rounded-md px-4 py-3 text-white">
                {loginButton.text}
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* mobile menu */}
      {menuOpen && <MobileMenu links={links} />}
      {/* mobile search */}
      {searchOpen && <MobileSearch setOpen={setSearchOpen} />}
    </div>
  );
}

export default EdgeNavbar;
