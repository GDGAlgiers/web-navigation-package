import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { generaleStyle } from "../../types/generaleStyleType";
import { NotifLink, simpleLink } from "../../types/linkType";
import { LogoInfo } from "../../types/logoType";
import { userInfo } from "../../types/userInfoType";

interface ISidePanel {
  Style: generaleStyle;
  links: simpleLink[];
  LogoInf: LogoInfo;
  NotifsLinks: NotifLink[];
  User: userInfo;
}

/**
 * @component SidebarPanel - A responsive React functional component for a side navigation bar.
 *
 * @example
 * // Example usage of SidebarPanel
 * import UserProfileImage from "my_image_source1"
 * import {HomeIcon, AboutIcon, NotificationIcon} from "my_icons_source2"
 * import YourLogoComponent from "my_image_source3"
 * 
 * //? stands for optional element
 * const sidenavbarProps = {
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
 *     { ?icon: HomeIcon, name: 'Home', link: '/home' },
 *     { ?icon: AboutIcon, name: 'About', link: '/about' },
 *     // Add more links as needed
 *   ],
 *   LogoInf: { title: 'GDG Algiers', logoIcon: YourLogoComponent },
 *   NotifsLinks: [
 *     { icon: NotificationIcon, name: 'Notifications', link: '/notifications', notif: 3 },
 *     // Add more notification links as needed
 *   ],
 *   User: {
 *     image: UserProfileImage,
 *     ?name: 'Okba ALLAOUA',
 *     ?additionalInfo: 'GDG Algiers Open Source Team Lead',
 *     ?role: 'Admin',
 *   },
 * };
 *
 * <SidebarPanel {...sidenavbarProps} />
 *
 * @param {ISidePanel} props The props for the component.
 * @returns {JSX.Element} The rendered element.
 * @author GDG Algiers
 */

const SidebarPanel = (props: ISidePanel) => {
  const { LogoInf, links, User, Style, NotifsLinks } = props;
  const { activeTextColor, activeBg, background, textColor, textSize } = Style;
  const { logoIcon, title } = LogoInf;
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div
        style={{ background: `${background}` }}
        className="w-64 fixed top-0 scroll flex-col gap-1 items-center bg-white h-screen max-h-screen overflow-y-scroll p-5 hidden lg:flex "
      >
        <div className="flex p-2 items-center gap-2">
          <Image alt="logoIcon" src={logoIcon} />
          <h1 className="text-[#324054] font-semibold text-2xl "> {title} </h1>
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-5 "
        >
          {links.map((link: any, index: number) => {
            return (
              <Link key={index} href={link.link}>
                <div
                  style={{
                    background: `${link.link == currentRoute && activeBg}`,
                  }}
                  className={`p-2 flex items-center gap-4`}
                >
                  <Image src={link.icon} alt={link.name} />
                  <h1
                    style={{
                      color: `${link.link == currentRoute && activeTextColor}`,
                    }}
                  >
                    {" "}
                    {link.name}{" "}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-8 "
        >
          {NotifsLinks.map((Userlink, index) => {
            return (
              <Link key={index} href={Userlink.link}>
                <div className="flex items-center justify-between">
                  <div className="p-2 flex items-center gap-4">
                    <Image src={Userlink.icon} alt={Userlink.name} />
                    <h1 className=" "> {Userlink.name} </h1>
                  </div>
                  {Userlink.notif != 0 && (
                    <div className="bg-[red] text-white w-4 h-4 flex items-center justify-center text-xs rounded-full">
                      {Userlink.notif}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
          <div className="flex items-center gap-2 p-3">
            <Image alt="profil pic" src={User.image} />
            <div className=" text-xs ">
              <h1 className="text-[#324054] text-md">{User.name}</h1>
              <p className="text-[#71839B] ">{User.additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-32 fixed top-0 scroll flex-col gap-5 items-center bg-white h-screen max-h-screen p-5 px-2 flex lg:hidden border-2 border-y-0">
        <div className="flex justify-start items-center">
          <Image alt="logoIcon" src={logoIcon} />
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-2 mt-4 "
        >
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.link}>
                <div className={`flex justify-center p-1 `}><Image src={link.icon} alt={link.name} /> </div>
              </Link>
            );
          })}
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-8 "
        >
          {NotifsLinks.map((Userlink, index) => {
            return (
              <Link key={index} href={Userlink.link}>
                <div className="relative flex justify-center p-1 ">
                  <Image src={Userlink.icon} alt={Userlink.name} />
                  {Userlink.notif && (
                    <div className="bg-[red] absolute text-white w-1 h-1 top-0 right-[30%] rounded-full" />
                  )}
                </div>
              </Link>
            );
          })}
          <div className="flex justify-center p-3">
            <Image alt="profil pic" src={User.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarPanel;
