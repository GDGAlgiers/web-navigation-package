import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IQuickSidebarProps{
logo:any,
Name:string,
links:any,
Pages:  {
  name: string;
  route: string;
}[],
textSize:string,
Userlinks: {icon: any, name: string, route: string}[],
ActivetextColor:string,
ActiveBg:string,
textColor:string
}

/**
 * @component QuickSidebar - A responsive React functional component for a side navigation bar.
 *
 * @example
 * // Example usage of QuickSidebar
 * import {YourLogoComponent, msg1, msg2, msg3} from "my_image_source"
 * 
 * const QuickSideBarProps = {
 *   logo: YourLogoComponent,
 *   Name: 'GDG Algiers',
 *   links: [
 *     { icon: msg1, name: 'Home', route: '/home' },
 *     { icon: msg2, name: 'About', route: '/about' },
 *     // Add more links as needed
 *   ],
 *   Pages: [
 *     { name: 'Page 1', route: '/page1' },
 *     { name: 'Page 2', route: '/page2' },
 *     // Add more pages as needed
 *   ],
 *   textSize: '16px',
 *   Userlinks: [
 *     { icon: msg3, name: 'Profile', route: '/profile' },
 *     // Add more user links as needed
 *   ],
 *   ActivetextColor: '#007bff',
 *   ActiveBg: '#f0f0f0',
 *   textColor: '#333333',
 * };
 *
 * <QuickSidebar {...QuickSideBarProps} />
 *
 * @param {IQuickSidebarProps} props The props for the component.
 * @returns {JSX.Element} The rendered element.
 * @author GDG Algiers
 */

const QuickSidebar = (props:IQuickSidebarProps) => {
  const {
    logo,
    Name,
    links,
    Pages,
    textSize,
    Userlinks,
    ActivetextColor,
    ActiveBg,
    textColor,
  } = props;
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div className="w-64 fixed top-0 scroll flex-col gap-1 items-center bg-white h-screen max-h-screen overflow-y-scroll p-5 hidden lg:flex ">
        <div className="flex p-2 items-center self-start gap-3">
          <Image alt="logo" src={logo} />
          <h1 className="text-[#324054] font-semibold text-sm "> {Name} </h1>
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-2 mt-3 "
        >
          {links.map((link:any, index:number) => {
            return (
              <Link key={index} href={link.route}>
                <div
                  style={{
                    background: `${link.route == currentRoute && ActiveBg}`,
                  }}
                  className={`p-2 flex items-center gap-3`}
                >
                  <Image src={link.icon} alt={link.name} />
                  <h1
                    style={{
                      color: `${link.route == currentRoute && ActivetextColor}`,
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
          className="flex w-full font-medium flex-col gap-1 mt-4"
        >
          <h2 className="text-[#7C7B84] text-xs mb-1 "> SHORCUTS </h2>
          {Userlinks &&
            Userlinks.map((Userlink:any, index:number) => {
              return (
                <Link key={index} href={Userlink.route}>
                  <div className="p-2 flex items-center gap-2">
                    <Image src={Userlink.icon} alt={Userlink.name} />
                    <h1 className=" "> {Userlink.name} </h1>
                  </div>
                </Link>
              );
            })}
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-1 mt-4"
        >
          <h2 className="text-[#7C7B84] text-xs mb-1 "> PAGES </h2>
          {Pages &&
            Pages.map((Page:any, index:number) => {
              return (
                <>
                <Link key={index} href={Page.route}>
                  <div className="p-2 flex items-center gap-2">
                    <div className="w-1 h-1 bg-black rounded-full "></div>
                    <h1 className=" "> {Page.name}</h1>
                  </div>
                </Link>
                </>
              );
            })}
        </div>
      </div>

      <div className="w-20 fixed top-0 scroll flex-col gap-5 items-center bg-white h-screen max-h-screen p-5 px-2 flex lg:hidden ">
        <div className="flex justify-center items-center">
          <Image alt="logo" src={logo} />
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-5 "
        >
          {links.map((link:any, index:number) => {
            return (
              <Link key={index} href={link.route}>
                <div className={`flex justify-center p-1 `}><Image src={link.icon} alt={link.name} /></div>
              </Link>
            );
          })}
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-8 "
        >
          {Userlinks.map((Userlink:any, index:number) => {
            return (
              <Link key={index} href={Userlink.route}>
                <div className="flex justify-center p-1 ">
                  <Image src={Userlink.icon} alt={Userlink.name} />
                </div>
              </Link>
            );
          })}
        </div>

        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-8 "
        >
          {Userlinks.map((Userlink:any, index:number) => {
            return (
              <Link key={index} href={Userlink.route}>
                <div className=" flex justify-center p-1 ">
                  <Image src={Userlink.icon} alt={Userlink.name} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuickSidebar;
