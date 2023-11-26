import React from "react";
import Image from "next/image";
import logout from "public/Images/template3/sign-out.svg";
import msg from "public/Images/template3/chat.svg";
import setting from "public/Images/template3/setting.svg";
import notif from "public/Images/template3/bell.svg";
import logo from "public/Images/template1/Navbar/logo-botw.png";
import profilpic from "public/Images/template1/Navbar/profilpic.svg";
import NavbarThree from "@/components/navbar3/navbarThree";
import { buttonInfo } from "@/types/navbarButtonInfo";

const Home = () => {

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
        Style={generalStyles}
        links={links}
        LogoInf={LogoInf}
        menuType="bottom-bar"
        loggedIn={false}
        button1={loginButton}
        button2={signUpButton}
        userInfo={user}
      />
    </div>
  );
};

export default Home;
