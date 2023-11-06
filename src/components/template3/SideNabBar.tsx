import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { generaleStyle } from "../../types/generaleStyleType";
import { NotifLink, simpleLink } from "../../types/linkType";
import { LogoInfo } from "../../types/logoType";
import { userInfo } from "../../types/userInfoType";

interface ISidenavbar3Props {
  Style: generaleStyle;
  links: simpleLink[];
  LogoInf: LogoInfo;
  NotifsLinks: NotifLink[];
  User: userInfo;
}
const Sidenavbar3 = (props: ISidenavbar3Props) => {
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
                  {link.icon}
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
                    {Userlink.icon}
                    <h1 className=" "> {Userlink.name} </h1>
                  </div>
                  {Userlink.notif!=0 && (
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
              <h1 className="text-[#324054]">{User.name}</h1>
              <p className="text-[#71839B] ">{User.additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-32 fixed top-0 scroll flex-col gap-5 items-center bg-white h-screen max-h-screen p-5 px-2 flex lg:hidden ">
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
                <div className={`flex justify-center p-1 `}>{link.icon}</div>
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
                  {Userlink.icon}
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

export default Sidenavbar3;
