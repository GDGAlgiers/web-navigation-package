import logo from "public/Images/template3/Logo.svg";
import home from "public/Images/template3/home-blue.svg";
import Dashboard from "public/Images/template3/dashboard.svg";
import Box from "public/Images/template3/box.svg";
import analysis from "public/Images/template3/analysis.svg";
import Image from "next/image";
import Link from "next/link";
import dropdown from "public/Images/template3/angle-down.svg";
import msg from "public/Images/template3/chat.svg"
import money from "public/Images/template3/money-bill.svg"
import setting from "public/Images/template3/setting.svg"
import notif from "public/Images/template3/bell.svg"
import history from "public/Images/template3/clock-five.svg"
import logout from "public/Images/template3/sign-out.svg"
import profil from "public/Images/template3/profilpic.svg"

const Sidenavbar3 = () => {
  return (
    <div className="w-[20vw] scroll flex flex-col justify-between items-center bg-white h-screen max-h-screen overflow-y-scroll p-5 ">
      <div className="flex p-2 items-center gap-2">
        <Image alt="logo" src={logo} />
        <h1 className="text-[#324054] font-semibold text-2xl ">Social Blade</h1>
      </div>
      <div className="flex w-full font-medium flex-col gap-3 mt-5 text-[#324054] ">
        <Link href={"/"}>
          <div className="p-2 flex items-center gap-4 bg-[#EFF6FF]">
            <Image alt="home" src={home} />
            <h1 className="text-[#2D68FE]  "> Home </h1>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="p-2 flex items-center gap-4">
            <Image alt="Dashboard" src={Dashboard} />
            <h1 className=" "> Dashboard </h1>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="p-2 flex items-center gap-4">
            <Image alt="Box" src={Box} />
            <h1 className=" "> Products </h1>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center justify-between">
            <div className="p-2 flex items-center gap-4">
              <Image alt="analysis" src={analysis} />
              <h1 className=" "> Analytics </h1>
            </div>
            {/* <Image alt="dropdown" src={dropdown} /> */}
          </div>
        </Link>

        <Link href={"/"}>
          <div className="flex items-center justify-between">
            <div className="p-2 flex items-center gap-4">
              <Image alt="analysis" src={analysis} />
              <h1 className=" "> Analytics </h1>
            </div>
            {/* <Image alt="dropdown" src={dropdown} /> */}
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center justify-between">
            <div className="p-2 flex items-center gap-4">
              <Image alt="analysis" src={analysis} />
              <h1 className=" "> Analytics </h1>
            </div>
            {/* <Image alt="dropdown" src={dropdown} /> */}
          </div>
        </Link>

        <Link href={"/"}>
          <div className="p-2 flex items-center gap-4">
            <Image alt="history" src={history} />
            <h1 className=" "> History </h1>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="flex items-center justify-between">
            <div className="p-2 flex items-center gap-4">
              <Image alt="Money" src={money} />
              <h1 className=" "> Sales </h1>
            </div>
            {/* <Image alt="dropdown" src={dropdown} /> */}
          </div>
        </Link>
      </div>
      <div className="flex w-full font-medium flex-col gap-3 mt-8 text-[#324054] ">
        <Link href={"/"}>
          <div className="flex items-center justify-between">
            <div className="p-2 flex items-center gap-4">
              <Image alt="msg" src={msg} />
              <h1 className=" "> Messages </h1>
            </div>
            <div className="bg-[red] text-white w-4 h-4 flex items-center justify-center text-xs rounded-full">
               2
            </div>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center justify-between">
            <div className="p-2 flex items-center gap-4">
              <Image alt="notif" src={notif} />
              <h1 className=" "> Notifications </h1>
            </div>
            <div className="bg-[red] text-white w-4 h-4 flex items-center justify-center text-xs rounded-full">
               2
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="p-2 flex items-center gap-4">
            <Image alt="setting" src={setting} />
            <h1 className=" "> Settings </h1>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="p-2 flex items-center gap-4">
            <Image alt="logout" src={logout} />
            <h1 className=" "> Logout </h1>
          </div>
        </Link>
        <div className="flex items-center gap-2 p-3">
        <Image alt="profil pic"  src={profil} />
        <div className=" text-xs ">
            <h1 className="text-[#324054]">Michael Smith</h1>
            <p className="text-[#71839B] ">michaelsmith12@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidenavbar3;
