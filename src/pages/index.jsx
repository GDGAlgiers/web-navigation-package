import Sidenavbar2 from "@/components/template2/SideNavBar"
import Sidenavbar3 from "@/components/template3/SideNabBar"
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

const Home = () => {
  const islogedin = true;
  const logo= Pic;
  const links = [
    {
      link: "/",
      name: "Overview",
      icon: Overview,
      children: [
        {
          link: "/",
          name: "Overview",
        },
        {
          link: "/",
          name: "List",
        },
      ],
    },
    {
      link: "/",
      name: "Calendar",
      icon: Calendar,
    },
    {
      link: "/",
      name: "Chat",
      icon: Chat,
    },{
      link: "/",
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="w-full h-full bg-black">
      <Sidenavbar2 links={links} logo={logo} isLogedIn={islogedin}/>
    </div>
  );
};

export default Home