import SideBarWithSearch, {
  template1SidnavType,
} from "./../components/SidebarWithSearch/SideBarWithSearch";
import profilePicture from "public/Images/SideBarWithSearch/profile_picture.svg";
import objectsSets from "public/Images/SideBarWithSearch/object_sets.svg";
import singleObjects from "public/Images/SideBarWithSearch/single_objects.svg";
import weeklyTop from "public/Images/SideBarWithSearch/weekly_top.svg";
import settingsPic from "public/Images/SideBarWithSearch/settings.svg";
import faq from "public/Images/SideBarWithSearch/faq.svg";
import heart from "public/Images/SideBarWithSearch/heart.svg";
import gallery from "public/Images/SideBarWithSearch/gallery.svg";
import cart from "public/Images/SideBarWithSearch/cart.svg";
import React from "react";
import home from "public/Images/template3/home-blue.svg";
import Dashboard from "public/Images/template3/dashboard.svg";
import Box from "public/Images/template3/box.svg";
import analysis from "public/Images/template3/analysis.svg";
import Image from "next/image";
import Link from "next/link";
import logout from "public/Images/template3/sign-out.svg";
import msg from "public/Images/template3/chat.svg";
import money from "public/Images/template3/money-bill.svg";
import setting from "public/Images/template3/setting.svg";
import notif from "public/Images/template3/bell.svg";
import history from "public/Images/template3/clock-five.svg";
import profil from "public/Images/template3/profilpic.svg";
import Sidenavbar3 from "../components/template3/SideNabBar";
import Navbar from "@/components/template1/Navbar";
import logo from "public/Images/template1/Navbar/logo-botw.png";
import profilpic from "public/Images/template1/Navbar/profilpic.svg";
import NavbarThree from "@/components/navbar3/navbarThree";

const Home = () => {
  const Userlinks = [
    {
      name: "Message",
      link: "/Message",
      icon: <Image alt="msg" src={msg} />,
      notif: 5,
    },
    {
      name: "Notifications",
      link: "/notif",
      icon: <Image alt="notif" src={notif} />,
      notif: 2,
    },
    {
      name: "Settings",
      link: "/setting",
      icon: <Image alt="setting" src={setting} />,
      notif: 0,
    },
    {
      name: "Log out",
      link: "/logout",
      icon: <Image alt="logout" src={logout} />,
      notif: 0,
    },
  ];
  const user = {
    image: profilpic,
  };

  const generalStyles = {
    textSize: "0.9rem",
    logoTextSize: "1.25rem",
    textColor: "black",
    activeTextColor: "white",
    background: "white",
    activeBg: "#27AE60",
    ButtonColor: "#3A4F39",
  };

  const LogoInf = {
    logoIcon: logo,
  };

  const links = [
    {
      name: "Home",
      link: [
        {
          name: "Landing",
          link: "/landing",
        },
        {
          name: "About",
          link: "/About",
        },
        {
          name: "Contact",
          link: "/",
        },
      ],
    },
    {
      name: "Landing",
      link: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Landing",
          link: "/landing",
        },
        {
          name: "About",
          link: "/About",
        },
        {
          name: "Contact",
          link: "/",
        },
      ],
    },
    {
      name: "About",
      link: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Landing",
          link: "/landing",
        },
        {
          name: "About",
          link: "/About",
        },
        {
          name: "Contact",
          link: "/",
        },
      ],
    },
    {
      name: "Contact",
      link: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Landing",
          link: "/landing",
        },
        {
          name: "About",
          link: "/About",
        },
        {
          name: "Contact",
          link: "/",
        },
      ],
    },
  ];
  const loginButton:buttonInfo={
    button:<button
    style={{ borderColor: "white" }}
    className="rounded-[4px] text-[#3A4F39] w-28 text-lg p-2 border "
  >
    {" "}
    Log In{" "}
  </button>,
  link:"/login"
  }

  const signUpButton:buttonInfo={
    button:<button
    style={{ borderColor: `red` }}
    className="rounded-[4px] text-[#3A4F39] w-28 text-lg p-2 border "
  >
    {" "}
    sign Up{" "}
  </button>,
  link:"/signUp"
  }
  return (
    <div className="w-full h-screen bg-black">
      <NavbarThree
        loggedIn={false}
        links={links}
        Style={generalStyles}
        menuType="bottom-bar"
        button2={signUpButton}
        button1={loginButton}
        LogoInf={LogoInf}
        userInfo={user}
      />
    </div>
  );
};

export default Home;
