import React from "react";
import Image from "next/image";
import { buttonInfo } from "@/types/navbarButtonInfo";

import logo from "public/Images/template1/Navbar/logo-botw.png";
import Calendar from "public/Images/template2/Calendar.svg";
import Overview from "public/Images/template2/Grid_Four.svg";
import Chat from "public/Images/template2/Chat_Dots.svg";
import profilpic from "public/Images/template1/Navbar/profilpic.svg";
import logoSB from "public/Images/template3/Logo.svg";
import settingsIcon from "public/images/template2/settings.svg";
import uploadIcon from "public/images/template2/upload.svg";
import Pic from "public/Images/template2/picture.png";
import Settings from "public/Images/template2/Settings.svg";
import home from "public/Images/template3/home-blue.svg";
import Dashboard from "public/Images/template3/dashboard.svg";
import Box from "public/Images/template3/box.svg";
import analysis from "public/Images/template3/analysis.svg";
import Link from "next/link";
import logout from "public/Images/template3/sign-out.svg";
import msg from "public/Images/template3/chat.svg";
import money from "public/Images/template3/money-bill.svg";
import setting from "public/Images/template3/setting.svg";
import notif from "public/Images/template3/bell.svg";
import history from "public/Images/template3/clock-five.svg";
import profil from "public/Images/template3/profilpic.svg";
//component package call
import { LinkExplorer, EdgeSidebar, EdgeNavbar, SidebarPanel, InteractiveNavbar, QuickSidebar, SideBarWithSearch } from "@/exports";

const Home = () => {

  const user = {
    image: profilpic,
    name:"kate russel",
    role:"project manager",
    isLogedIn : true
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

  const simpleLink = [
    {
      link: "/1",
      name: "Overview",
      icon: Overview,
    },
    {
      link: "/2",
      name: "Calendar",
      icon: Calendar,
    },
    {
      link: "/3",
      name: "Chat",
      icon: Chat,
    }
  ]

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

  const sidebarProps = {
    mainLinks: [
      { name: 'Home', link: '/home' },
      // Add more main links as needed
    ],
    settingsLinks: [
      { name: 'Settings', link: '/settings' },
      // Add more settings links as needed
    ],
    optionsLinks: [
      { name: 'Options', link: '/options' },
      // Add more options links as needed
    ],
    profileInformation: {
      image: logo,
      name: 'John Doe',
      additionalInfo: 'Some additional info',
      role: 'Admin',
    },
    logo: { title: 'Your Company', logoIcon: profilpic },
    generalStyles: {
      textColor: '#333333',
      activeBg: '#f0f0f0',
      activeTextColor: '#007bff',
      background: '#ffffff',
      textSize: '16px',
      HoverTextColor: '#555555',
      HoverBgColor: '#f0f0f0',
      BackgroundColor: '#ffffff',
      ActiveTextColor: '#007bff',
      BorderColor: '#dddddd',
      ButtonColor: '#3498db',
    },
    logout: () => {
      // Handle logout functionality
    }
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

  const searchBarCustomization = {
    placeholder:"search instances",
    options:{},
    bg:"#3A3B3B",
    textSize: "0.8rem",
    textColor: "#7F8080",
  }

  return (
    <div className="w-full h-screen">
      {/* <InteractiveNavbar
        Style={generalStyles}
        links={
          [
            {
              name: "Home",
              link: []
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
          ]
        }
        LogoInf={logo}
        menuType="bottom-bar"
        loggedIn={true}
        button1={loginButton}
        button2={signUpButton}
        userInfo={user}
      /> */}

      {/* <SideBarWithSearch
        mainLinks={simpleLink}
        settingsLinks={simpleLink}
        optionsLinks={simpleLink}
        profileInformation={user}
        logo={{title: "logo", logoIcon: logo}}
        generalStyles={generalStyles}
        logout={()=>console.log("hello")}
      /> */}

      {/* <LinkExplorer
        links={
          [
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
          ]
        }
        Style={generalStyles}
        menuType="bottom-bar"
        SignInRoute={'signUpButton'}
        loginRoute={'loginButton'}
        LogoInf={LogoInf}
        User={user}
        loggedIn={false}
      /> */}

      {/* <SidebarPanel
        LogoInf={LogoInf}
        Style={generalStyles}
        NotifsLinks={
          [
            {
              name: "Message",
              link: "/Message",
              icon: msg,
              notif: 5,
            },
            {
              name: "Notifications",
              link: "/notif",
              icon: notif,
              notif: 2,
            },
            {
              name: "Settings",
              link: "/setting",
              icon: setting,
              notif:0
            },
            {
              name: "Log out",
              link: "/logout",
              icon: logout,
              notif:0
            },
          ]
        }
        links={
          [
            {
              name: "Home",
              link: "/",
              icon: home,
            },
            {
              name: "Dashboard",
              link: "/Dashboard",
              icon: Dashboard,
            },
            {
              name: "Products",
              link: "/Products",
              icon: Box,
            },
            {
              name: "Analytics",
              link: "/Analytics",
              icon: analysis,
            },
            {
              name: "History",
              link: "/History",
              icon: history,
            },
            {
              name: "Sales",
              link: "/Sales",
              icon: money,
            },
          ]
        }
        User={user}
      /> */}

      {/* <QuickSidebar
        logo={logoSB}
        Name={"Social Blade"}
        links={
          [
            {
              name: "Home",
              route: "/",
              icon: home,
            },
            {
              name: "Dashboard",
              route: "/Dashboard",
              icon: Dashboard,
            },
            {
              name: "Products",
              route: "/Products",
              icon: Box,
            },
            {
              name: "History",
              route: "/History",
              icon: history,
            }
          ]
        }
        Pages={
          [
            {
              name: "Home",
              route: "/"
            },
            {
              name: "Dashboard",
              route: "/Dashboard",
            },
            {
              name: "History",
              route: "/History"
            }
          ]
        }
        textSize={"14px"}
        Userlinks={
          [
            {
              name: "Message",
              route: "/Message",
              icon: msg,
            },
            {
              name: "Notifications",
              route: "/notif",
              icon: notif,
            }
          ]
        }
        ActivetextColor={"white"}
        ActiveBg={"black"}
        textColor={"black"}
      /> */}

      {/* <EdgeNavbar
        links={[
          {
            link: "/1",
            name: "Overview",
            icon: Overview,
          },
          {
            link: "/2",
            name: "Calendar",
            icon: Calendar,
          },
          {
            link: "/3",
            name: "Chat",
            icon: Chat,
          }
        ]}
        isLoggedIn={true}
        logo={logo}
        avatar={{
          picture: user.image,
          link: "profile"
        }}
        loginButton={{
          text: "Login",
          link: "login"
        }}
        generaleStyles={generalStyles}
        mobileSettings={{
          menuType: "hamburger"
        }}
      /> */}

      {/* <EdgeSidebar
        links={
          [
            {
              link: [
                {
                  link: "overview",
                  name: "Overview",
                  icon: "1",
                },
                {
                  link: "list",
                  name: "List",
                  icon: "2",
                },
              ],
              name: "Overview",
              icon: Overview,
              currentLink: "/"
            },
            {
              link: [
                {
                  link: "overview",
                  name: "Overview",
                  icon: "1",
                },
                {
                  link: "list",
                  name: "List",
                  icon: "2",
                },
              ],
              name: "Calendar",
              icon: Calendar,
              currentLink: "/"
            },
            {
              link: [
                {
                  link: "overview",
                  name: "Overview",
                  icon: "1",
                },
                {
                  link: "list",
                  name: "List",
                  icon: "2",
                },
              ],
              name: "Chat",
              icon: Chat,
              currentLink: "/"
            }
          ]
        }
        generaleStyles={generalStyles}
        user={user}
      /> */}
    </div>
  );
};

export default Home;
