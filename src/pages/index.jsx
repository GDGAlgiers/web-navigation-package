import SideBarWithSearch from "@/components/SidebarWithSearch/SideBarWithSearch";
import logo from "public/Images/SideBarWithSearch/logo.svg";
import profilePicture from "public/Images/SideBarWithSearch/profile_picture.svg";
import objectsSets from "public/Images/SideBarWithSearch/object_sets.svg";
import singleObjects from "public/Images/SideBarWithSearch/single_objects.svg";
import weeklyTop from "public/Images/SideBarWithSearch/weekly_top.svg";
import settingsPic from "public/Images/SideBarWithSearch/settings.svg";
import faq from "public/Images/SideBarWithSearch/faq.svg";
import heart from "public/Images/SideBarWithSearch/heart.svg";
import gallery from "public/Images/SideBarWithSearch/gallery.svg";
import cart from "public/Images/SideBarWithSearch/cart.svg";
import Image from "next/image";
import nvb3Logo from "public/Images/navbar3/Logo.svg";
import NavbarThree from "@/components/navbar3/navbarThree";

const Home = () => {
  const profileInformation = {
    profilePicture: <Image src={profilePicture} alt="profile picture" />,
    fullName: "John Doe",
    companyName: "MadGallery Basic",
  };

  const settings = [
    {
      image: <Image src={settingsPic} alt="settings" />,
      text: "settings",
      route: "/settings",
    },
    {
      image: <Image src={faq} alt="FAQ" />,
      text: "FAQ",
      route: "/faq",
    },
  ];

  const options = [
    {
      image: <Image src={heart} alt="fav" />,
      text: "Favourites",
      route: "/favourites",
    },
    {
      image: <Image src={gallery} alt="gallery" />,
      text: "My gallery",
      route: "/gallery",
    },
    {
      image: <Image src={cart} alt="cart" />,
      text: "My Cart",
      route: "/cart",
    },
  ];

  const instances = [
    {
      image: <Image src={weeklyTop} alt="weekly top" width={15} />,
      text: "Weekly top",
      route: "/weekly-top",
    },
    {
      image: <Image src={singleObjects} alt="Single objects" width={15} />,
      text: "Single objects",
      route: "/single-objects",
    },
    {
      image: <Image src={objectsSets} alt="Objects sets" width={15} />,
      text: "Objects sets",
      route: "/objects-sets",
    },
  ];

  const generalStyles = {
    textSize: "0.75rem",
    logoTextSize: "1.25rem",
    textColor: "#969998",
    activeTextColor: "white",
    bg: "#171918",
    activeBg: "#27AE60",
    seperatingLineColor: "#FFFFFF26",
  };

  const searchBarCustomization = {
    placeholder: "search instances",
    options: {},
    bg: "#3A3B3B",
    textSize: "0.8rem",
    textColor: "#7F8080",
  };

  const randomDataLinks = [
    {
      title: "One",
      subTitles: ["One", "Two", "Three"],
      subTitlesLinks: ["/", "/", "/"],
    },
    {
      title: "Two",
      subTitles: ["Four", "Five", "Six"],
      subTitlesLinks: ["/", "/", "/"],
    },
    {
      title: "Three",
      subTitles: ["Seven", "Eight", "Nine"],
      subTitlesLinks: ["/", "/", "/"],
    },
  ];

  return (
    <div className="">
      <NavbarThree
        logo={nvb3Logo}
        logoWidth="70px"
        logoHeight=""
        data={randomDataLinks}
        btnOne="Sigh in"
        linkBtnOne="/"
        btnTwo="Sign up"
        linkBtnTwo="/"
        navBgColor="#dddddd"
        navHeight="80px"
        mobileSideBarBg="#fff"
      />
      {/* <SideBarWithSearch
        logo={<Image src={logo} alt="logo" />}
        name="ModGallery"
        searchBarCustomization={searchBarCustomization}
        profileInformation={profileInformation}
        instances={instances}
        settings={settings}
        options={options}
        layout="Fixed"
        loggedIn={true}
        generalStyles={generalStyles}
      /> */}
    </div>
  );
};

export default Home;
