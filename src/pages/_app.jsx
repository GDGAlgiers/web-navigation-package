import SideNavBar from "@/components/template2/SideNavBar";
import "@/styles/globals.css";
import Sidenavbar2 from "@/components/template2/SideNavBar";
import Sidenavbar3 from "@/components/template3/SideNabBar";
import Image from "next/image";
import Link from "next/link";
import Pic from "public/Images/template2/picture.png";
import Arrow from "public/Images/template2/Down.svg";
import Calendar from "public/Images/template2/Calendar.svg";
import Overview from "public/Images/template2/Grid_Four.svg";
import List from "public/Images/template2/View_List.svg";
import Chat from "public/Images/template2/Chat_Dots.svg";
import Settings from "public/Images/template2/Settings.svg";
import Shop from "public/Images/template2/Shopping_Cart.svg";
import Support from "public/Images/template2/Support.png";
import Collapse from "public/Images/template2/Subtract.svg";

export default function App({ Component, pageProps }) {
  const generaleStyles = {
    textSize: "16px",
    textColor: "0A1B39",
    HoverColor: "bg-slate-500",
    BorderColor: "black", 
  };
  const islogedin = true;
  const logo = Pic;
  const links = [
    {
      link: "/qq1",
      name: "Overview",
      icon: Overview,
    },
    {
      link: "/qq2",
      name: "Calendar",
      icon: Calendar,
    },
    {
      link: "/qq3",
      name: "Chat",
      icon: Chat,
      childItems: [
        {
          link: "/",
          name: "Overview",
          icon: "1",
        },
        {
          link: "/",
          name: "List",
          icon: "2",
        },
      ],
    },
    {
      link: "/qq4",
      name: "Settings",
      icon: Settings,
      childItems: [
        {
          link: "/overview",
          name: "Overview",
          icon: "1",
        },
        {
          link: "/list",
          name: "List",
          icon: "2",
        },
      ],
    },
  ];

  return (
    <div className="flex">
      <Sidenavbar2 links={links} logo={logo} isLogedIn={islogedin} generaleStyles={generaleStyles} />
      <div className="flex flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
