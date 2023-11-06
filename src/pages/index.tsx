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
import logo from "public/Images/template3/Logo.svg";
// export interface template1SidnavType{
//   generaleLink:links[],
//   settingLinks:links[],
//   instanceLink:links[],
//   userInfo:userInfo,
//   search:(value:string)=>void,
//   logo:LogoInfo,
//   generaleStyle?:generaleStyle

// }
const Home = () => {
  const links = [
    {
      name: "Home",
      link: "/",
      icon: <Image alt="home" src={home} />,
    },
    {
      name: "Dashboard",
      link: "/Dashboard",
      icon: <Image alt="home" src={Dashboard} />,
    },
    {
      name: "Products",
      link: "/Products",
      icon: <Image alt="box" src={Box} />,
    },
    {
      name: "Analytics",
      link: "/Analytics",
      icon: <Image alt="analysis" src={analysis} />,
    },
    {
      name: "History",
      link: "/History",
      icon: <Image alt="history" src={history} />,
    },
    {
      name: "Sales",
      link: "/Sales",
      icon: <Image alt="Sales" src={money} />,
    },
  ];
  const NotifsLinks = [
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
      notif:0
    },
    {
      name: "Log out",
      link: "/logout",
      icon: <Image alt="logout" src={logout} />,
      notif:0
    },
  ];
  const user = {
    name: "Michael Smith",
    additionalInfo: "michaelsmith12@gmail.com",
    image: profil,
  };

  const profileInformation = {
    image: <Image src={profilePicture} alt="profile picture" />,
    name: "John Doe",
    additionalInfo: "MadGallery Basic",
  };

  const settings = [
    {
      icon: <Image src={settingsPic} alt="settings" />,
      name: "settings",
      link: "/settings",
    },
    {
      icon: <Image src={faq} alt="FAQ" />,
      name: "FAQ",
      link: "/faq",
    },
  ];

  const options = [
    {
      icon: <Image src={heart} alt="fav" />,
      name: "Favourites",
      link: "/favourites",
    },
    {
      icon: <Image src={gallery} alt="gallery" />,
      name: "My gallery",
      link: "/gallery",
    },
    {
      icon: <Image src={cart} alt="cart" />,
      name: "My Cart",
      link: "/cart",
    },
  ];

  const instances = [
    {
      icon: <Image src={weeklyTop} alt="weekly top" width={15} />,
      name: "Weekly top",
      link: "/weekly-top",
    },
    {
      icon: <Image src={singleObjects} alt="Single objects" width={15} />,
      name: "Single objects",
      link: "/single-objects",
    },
    {
      icon: <Image src={objectsSets} alt="Objects sets" width={15} />,
      name: "Objects sets",
      link: "/objects-sets",
    },
  ];
  const generalStyles = {
    textSize: "0.75rem",
    logoTextSize: "1.25rem",
    textColor: "#969998",
    activeTextColor: "white",
    background: "#171918",
    activeBg: "#27AE60",
  };
  const logoInfo = {
    logoIcon: <Image src={logo} alt="logo" />,
    title: "ModGallery",
  };
  const template1SidnavType: template1SidnavType = {
    mainLinks: instances,
    settingsLinks: settings,
    optionsLinks: options,
    profileInformation: profileInformation,
    logo: logoInfo,
    generalStyles: generalStyles,
    logout: () => {
      console.log("test");
    },
  };

  const LogoInf={
    title:"Social Blade",
    logoIcon:logo
  }
  return (
    <div className="w-full h-screen bg-black">
      {/* <SideNavbar4
        logo={logo}
        Name="Social Blade"
        textSize="14px"
        textColor="red"
        ActivetextColor="green"
        ActiveBg="red"
        Userlinks={Userlinks}
        links={links}
        Pages={Pages}
      /> */}
      <Sidenavbar3
       LogoInf={LogoInf}
       Style={generalStyles}
       NotifsLinks={NotifsLinks}
        links={links}
        User={user}
      />
    </div>
  );
};

export default Home;
