import React from "react";
import { buttonInfo } from "@/types/navbarButtonInfo";
import Link from "next/link";
//component package call
import { LinkExplorer, EdgeSidebar, EdgeNavbar, SidebarPanel, InteractiveNavbar, QuickSidebar, SideBarWithSearch } from "@/exports";
import { ISidePanel } from "@/components/SidebarPanel";

const Home = () => {

  const fakeProps: ISidePanel = {
    Style: {
      textColor: "#333",
      textSize: "16px",
      background: "#fff",
      HoverTextColor: "#555",
      HoverBgColor: "#eee",
      BackgroundColor: "#f5f5f5",
      ActiveTextColor: "#fff",
      BorderColor: "#ccc",
      ButtonColor: "#007bff"
    },
    links: [
      {
        icon: "https://i.pinimg.com/564x/6d/37/3a/6d373a403a01eb017bdc25d0e80f1ce7.jpg",
        name: "Link 1",
        link: "/link1"
      },
      {
        icon: "https://i.pinimg.com/564x/6d/37/3a/6d373a403a01eb017bdc25d0e80f1ce7.jpg",
        name: "Link 2",
        link: "/link2"
      },
      {
        icon: "https://i.pinimg.com/564x/6d/37/3a/6d373a403a01eb017bdc25d0e80f1ce7.jpg",
        name: "Link 3",
        link: "/link3"
      }
    ],
    LogoInf: {
      title: "Your Logo",
      logoIcon: "https://i.pinimg.com/564x/6d/37/3a/6d373a403a01eb017bdc25d0e80f1ce7.jpg"
    },
    NotifsLinks: [
      {
        icon: "notification_icon",
        name: "Notification 1",
        link: "/notification1",
        notif: 3
      },
      {
        icon: "notification_icon",
        name: "Notification 2",
        link: "/notification2",
        notif: 1
      }
    ],
    User: {
      image: "https://i.pinimg.com/564x/6d/37/3a/6d373a403a01eb017bdc25d0e80f1ce7.jpg",
      name: "John Doe",
      additionalInfo: "Admin",
      role: "Admin"
    }
  };
  
  return (
    <div className="w-full h-screen">
    <SidebarPanel User={fakeProps.User} links={fakeProps.links} Style={fakeProps.Style} NotifsLinks={fakeProps.NotifsLinks}  LogoInf={fakeProps.LogoInf}  />
    </div>
  );
};

export default Home;
