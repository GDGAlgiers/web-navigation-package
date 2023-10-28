import Image from "next/image";
import Link from "next/link";
import msg from "public/Images/template3/chat.svg";
import setting from "public/Images/template3/setting.svg";
import notif from "public/Images/template3/bell.svg";
import logout from "public/Images/template3/sign-out.svg";
import { useRouter } from "next/router";
import frame from "public/Images/template4/Frame.png"
const SideNavbar4 = (props) => {
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
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.route}>
                <div
                  style={{
                    background: `${link.route == currentRoute && ActiveBg}`,
                  }}
                  className={`p-2 flex items-center gap-3`}
                >
                  {link.icon}
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
            Userlinks.map((Userlink, index) => {
              return (
                <Link key={index} href={Userlink.route}>
                  <div className="p-2 flex items-center gap-2">
                    {Userlink.icon}
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
            Pages.map((Page, index) => {
              return (
                <>
                <Link key={index} href={Page.route}>
                  <div className="p-2 flex items-center gap-2">
                    {Page.Child ?  <Image alt="frame" src={frame} /> : <div className="w-1 h-1 bg-black rounded-full "></div>  }
                    <h1 className=" "> {Page.name} </h1>
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
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.route}>
                <div className={`flex justify-center p-1 `}>{link.icon}</div>
              </Link>
            );
          })}
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-8 "
        >
          {Userlinks.map((Userlink, index) => {
            return (
              <Link key={index} href={Userlink.route}>
                <div className="flex justify-center p-1 ">
                  {Userlink.icon}
                </div>
              </Link>
            );
          })}
        </div>

        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-8 "
        >
          {Userlinks.map((Userlink, index) => {
            return (
              <Link key={index} href={Userlink.route}>
                <div className=" flex justify-center p-1 ">
                  {Userlink.icon}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNavbar4;
