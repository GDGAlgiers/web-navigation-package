import SideBarWithSearch, { template1SidnavType } from "./../components/SidebarWithSearch/SideBarWithSearch";
import logo from "public/Images/SideBarWithSearch/logo.svg";
import profilePicture from "public/Images/SideBarWithSearch/profile_picture.svg";
import objectsSets from "public/Images/SideBarWithSearch/object_sets.svg"
import singleObjects from "public/Images/SideBarWithSearch/single_objects.svg"
import weeklyTop from "public/Images/SideBarWithSearch/weekly_top.svg"
import settingsPic from "public/Images/SideBarWithSearch/settings.svg"
import faq from "public/Images/SideBarWithSearch/faq.svg"
import heart from "public/Images/SideBarWithSearch/heart.svg"
import gallery from "public/Images/SideBarWithSearch/gallery.svg"
import cart from "public/Images/SideBarWithSearch/cart.svg"
import React from "react";
import Image from "next/image";
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
  // const links = [
  //   {
  //     name: "Home",
  //     route: "/",
  //     icon: <Image alt="home" src={home} />,
  //   },
  //   {
  //     name: "Dashboard",
  //     route: "/Dashboard",
  //     icon: <Image alt="home" src={Dashboard} />,
  //   },
  //   {
  //     name: "Products",
  //     route: "/Products",
  //     icon: <Image alt="box" src={Box} />,
  //   },
  //   {
  //     name: "History",
  //     route: "/History",
  //     icon: <Image alt="history" src={history} />,
  //   }
  // ];
  // const Userlinks = [
  //   {
  //     name: "Message",
  //     route: "/Message",
  //     icon: <Image alt="msg" src={msg} />,
  //     notif: 5,
  //   },
  //   {
  //     name: "Notifications",
  //     route: "/notif",
  //     icon: <Image alt="notif" src={notif} />,
  //     notif: 2,
  //   }
  // ];
  // const Pages =[
  //   {
  //     name: "Home",
  //     route: "/",
  //     Child: [
  //       {
  //         name: "Home",
  //         route: "/",
  //       },
  //       {
  //         name: "Dashboard",
  //         route: "/Dashboard"
  //       } ]
  //   },
  //   {
  //     name: "Dashboard",
  //     route: "/Dashboard",
  //   },
  //   {
  //     name: "History",
  //     route: "/History"
  //   }
  // ];
  

  const profileInformation = {
    image: <Image src={profilePicture} alt="profile picture" />,
    name: "John Doe",
    additionalInfo: "MadGallery Basic",
  };

  const settings = [
      {
        icon:<Image src={settingsPic} alt="settings" />,
        name:"settings",
        link:"/settings",
      },
      {
        icon:<Image src={faq} alt="FAQ"/>,
        name:"FAQ",
        link:"/faq",
      },
  ]

  const options =[
      {
          icon:<Image src={heart} alt="fav"/>,
          name:"Favourites",
          link:"/favourites",
      },
      {
          icon: <Image src={gallery} alt="gallery"/>,
          name:"My gallery",
          link:"/gallery",
      },
      {
          icon:<Image src={cart} alt="cart" />,
          name:"My Cart",
          link:"/cart",
      }
  ]

  const instances = [
        {
            icon:<Image src={weeklyTop} alt="weekly top" width={15}/>,
            name:"Weekly top",
            link:"/weekly-top"
        },
        {
            icon: <Image src={singleObjects} alt="Single objects" width={15}/>,
            name:"Single objects",
            link:"/single-objects"
        },
        {
            icon: <Image src={objectsSets} alt="Objects sets" width={15} />,
            name:"Objects sets",
            link:"/objects-sets"
        },
  ];
  const generalStyles = {
      textSize: "0.75rem",
      logoTextSize:"1.25rem",
      textColor:"#969998",
      activeTextColor:"white",
      bg:"#171918",
      activeBg:"#27AE60",
  }


  const searchBarCustomization = {
      placeholder:"search instances",
      options:{},
      bg:"#3A3B3B",
      textSize: "0.8rem",
      textColor: "#7F8080",
  }

  const logoInfo={
    logoIcon:<Image src={logo} alt="logo" />,
    title:"ModGallery",
  }
  const template1SidnavType:template1SidnavType={
    mainLinks:instances,
    settingsLinks:settings,
    optionsLinks:options,
    profileInformation:profileInformation,
    logo:logoInfo,
    searchBarCustomization:searchBarCustomization,
    generalStyles:generalStyles

  }
  return (
    <div className="w-full h-[150vh] bg-black">
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
      <SideBarWithSearch 
      logo={template1SidnavType.logo}
      searchBarCustomization={template1SidnavType.searchBarCustomization}  
      profileInformation={template1SidnavType.profileInformation} 
      mainLinks={template1SidnavType.mainLinks} 
      settingsLinks={template1SidnavType.settingsLinks} 
      optionsLinks={template1SidnavType.optionsLinks}
      generalStyles={generalStyles}/>
    </div>
  );
};

export default Home;
