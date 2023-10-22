import Image from "next/image";
import Link from "next/link";
import msg from "public/Images/template3/chat.svg";
import setting from "public/Images/template3/setting.svg";
import notif from "public/Images/template3/bell.svg";
import logout from "public/Images/template3/sign-out.svg";
import { useRouter } from "next/router";

const Sidenavbar3 = (props) => {
  const { logo, Name, links, User, textSize, Userlinks,ActivetextColor, ActiveBg, textColor } = props;
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div className="w-64 fixed top-0 scroll flex-col gap-1 items-center bg-white h-screen max-h-screen overflow-y-scroll p-5 hidden lg:flex ">
        <div className="flex p-2 items-center gap-2">
          <Image alt="logo" src={logo} />
          <h1 className="text-[#324054] font-semibold text-2xl "> {Name} </h1>
        </div>
        <div
          style={{ fontSize: `${textSize}`, color: `${textColor}` }}
          className="flex w-full font-medium flex-col gap-3 mt-5 "
        >
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.route}>
                <div
                style={{background:`${link.route == currentRoute && ActiveBg}`}}
                  className={`p-2 flex items-center gap-4`}
                >
                  {link.icon}
                  <h1
                  style={{color:`${link.route == currentRoute && ActivetextColor}`}}
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
          {Userlinks.map((Userlink, index) => {
            return (
              <Link key={index} href={Userlink.route}>
                <div className="flex items-center justify-between">
                  <div className="p-2 flex items-center gap-4">
                    {Userlink.icon}
                    <h1 className=" "> {Userlink.name} </h1>
                  </div>
                  {Userlink.notif && (
                    <div className="bg-[red] text-white w-4 h-4 flex items-center justify-center text-xs rounded-full">
                      {Userlink.notif}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
          <div className="flex items-center gap-2 p-3">
            <Image alt="profil pic" src={User.pic} />
            <div className=" text-xs ">
              <h1 className="text-[#324054]">{User.name}</h1>
              <p className="text-[#71839B] ">{User.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-32 fixed top-0 scroll flex-col gap-5 items-center bg-white h-screen max-h-screen p-5 px-2 flex lg:hidden ">
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
            <Image alt="profil pic" src={User.pic} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenavbar3;
