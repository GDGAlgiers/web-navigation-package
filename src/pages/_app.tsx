import "@/styles/globals.css";
import type { AppProps } from 'next/app'
import Sidenavbar2 from "@/components/template2/SideNavBar";
import Pic from "public/Images/template2/picture.png";
import Calendar from "public/Images/template2/Calendar.svg";
import Overview from "public/Images/template2/Grid_Four.svg";
import Chat from "public/Images/template2/Chat_Dots.svg";
import Settings from "public/Images/template2/Settings.svg";

export default function App({ Component, pageProps } : AppProps) {
  const generaleStyles = {
    textSize: "16px",
    textColor: "#0A1B39",
    HoverTextColor: "rgb(113 113 122)",
    HoverBgColor:"",
    BorderColor: "#000",
    BackgroundColor: "##E6E7EC",
    ActiveTextColor: "rgb(37 99 235)",
  };
  const user = {
    name:"kate russel",
    role:"project manager",
    image:Pic,
    isLogedIn : true
  }
  const links = [
    {
      link: "/page1",
      name: "Overview",
      icon: Overview,
    },
    {
      link: "/page2",
      name: "Calendar",
      icon: Calendar,
    },
    {
      link: "/page3",
      name: "Chat",
      icon: Chat,
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
    {
      link: "/page4",
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
      <div className="flex flex-1">
        <Component {...pageProps} />
      </div>
  );
}