import Navbar from "@/components/template1/Navbar";
import Navbar2 from "@/components/template2/Navbar";
import logo from "public/Images/template1/Navbar/logo-botw.png";
import profilpic from "public/Images/template1/Navbar/profilpic.svg";
import settingsIcon from "public/images/template2/settings.svg";
import uploadIcon from "public/images/template2/upload.svg";
import home from "public/Images/template3/home-blue.svg";
import Dashboard from "public/Images/template3/dashboard.svg";
import Box from "public/Images/template3/box.svg";
import Image from "next/image";
import msg from "public/Images/template3/chat.svg";
import notif from "public/Images/template3/bell.svg";
import history from "public/Images/template3/clock-five.svg";
import logo from "public/Images/template3/Logo.svg";
import profil from "public/Images/template3/profilpic.svg";
import analysis from "public/Images/template3/analysis.svg";
import Link from "next/link";
import logout from "public/Images/template3/sign-out.svg";
import money from "public/Images/template3/money-bill.svg";
import setting from "public/Images/template3/setting.svg";
import Sidenavbar3 from "@/components/template3/SideNabBar";
import SideNavbar4 from "@/components/template4/sidenavbar";

const Home = () => {
  const links = [
    {
      name: "Home",
      route: "/",
      icon: <Image alt="home" src={home} />,
    },
    {
      name: "Dashboard",
      route: "/Dashboard",
      icon: <Image alt="home" src={Dashboard} />,
    },
    {
      name: "Products",
      route: "/Products",
      icon: <Image alt="box" src={Box} />,
    },
    {
      name: "History",
      route: "/History",
      icon: <Image alt="history" src={history} />,
    },
  ];
  const Userlinks = [
    {
      name: "Message",
      route: "/Message",
      icon: <Image alt="msg" src={msg} />,
      notif: 5,
    },
    {
      name: "Notifications",
      route: "/notif",
      icon: <Image alt="notif" src={notif} />,
      notif: 2,
    },
  ];
  const Pages = [
    {
      name: "Home",
      route: "/",
      Child: [
        {
          name: "Home",
          route: "/",
        },
        {
          name: "Dashboard",
          route: "/Dashboard",
        },
      ],
    },
    {
      name: "Dashboard",
      route: "/Dashboard",
    },
    {
      name: "History",
      route: "/History",
    },
  ];
  return (
    <div className="w-full h-[150vh] bg-black">
      {/* <Navbar
        links={links}
        loginRoute="/login"
        menuType="bottom-bar"
        ButtonColor="red"
        SignInRoute="/Signin"
        logo={logo}
        textColor="#3A4F39"
        textSize="18px"
        logoProfil={profilpic}
        layout="Fixed"
      /> */}
      <Navbar2
        links={[
          { link: "#", name: "settings", icon: settingsIcon },
          { link: "#", name: "upload", icon: uploadIcon },
        ]}
        isLoggedIn
      />
    </div>
  );
};

export default Home;
