import home from "public/Images/template3/home-blue.svg";
import Dashboard from "public/Images/template3/dashboard.svg";
import Box from "public/Images/template3/box.svg";
import analysis from "public/Images/template3/analysis.svg";
import Image from "next/image";
import Link from "next/link";
import logout from "public/Images/template3/sign-out.svg"
import msg from "public/Images/template3/chat.svg"
import money from "public/Images/template3/money-bill.svg"
import setting from "public/Images/template3/setting.svg"
import notif from "public/Images/template3/bell.svg"
import history from "public/Images/template3/clock-five.svg"
import profil from "public/Images/template3/profilpic.svg"
import Sidenavbar3 from "@/components/template3/SideNabBar";
import logo from "public/Images/template3/Logo.svg";

const Home = () => {
  const links = [
    {
      name: "Home",
      route: "/",
      icon:  <Image alt="home" src={home} />
    },
    {
      name: "Dashboard",
      route: "/Dashboard",
      icon:  <Image alt="home" src={Dashboard} />

    },
    {
      name: "Products",
      route: "/Products",
      icon:  <Image alt="box" src={Box} />

    },
    {
      name: "Analytics",
      route: "/Analytics",
      icon: <Image alt="analysis" src={analysis} />
    },
    {
      name: "History",
      route: "/History",
      icon: <Image alt="history" src={history} />
    },
    {
      name: "Sales",
      route: "/Sales",
      icon: <Image alt="Sales" src={money} />
    }
  ];
  const Userlinks = [
    {
      name: "Message",
      route: "/Message",
      icon:  <Image alt="msg" src={msg} />,
      notif:5
    },
    {
      name: "Notifications",
      route: "/notif",
      icon:  <Image alt="notif" src={notif} />,
      notif:2

    },
    {
      name: "Settings",
      route: "/setting",
      icon:  <Image alt="setting" src={setting} />

    },
    {
      name: "Log out",
      route: "/logout",
      icon: <Image alt="logout" src={logout} />
    }
  ];
  const user={
    name:"Michael Smith",
    email:"michaelsmith12@gmail.com",
    pic:profil
  }
  return (
    <div className="w-full h-[150vh] bg-black">
      <Sidenavbar3 logo={logo} Name="Social Blade" Userlinks={Userlinks} links={links} User={user} />
    </div>
  );
};

export default Home;
