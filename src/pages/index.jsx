import Sidenavbar3 from "@/components/template3/SideNabBar";
import SideBarWithSearch from "@/components/SidebarWithSearch/SideBarWithSearch";
import NavbarThree from "@/components/navbar3/navbarThree";
import logo from "../../public/Images/template1/Navbar/Logo.svg";

const Home = () => {
  const customData = [
    {
      title: "customOne",
      subTitles: ["One", "One", "One"],
      subTitlesLinks: ["/", "/", "/"],
    },
    {
      title: "customTwo",
      subTitles: ["Two", "Two", "Two"],
      subTitlesLinks: ["/", "/", "/"],
    },
    {
      title: "customThree",
      subTitles: ["Three", "Three", "Three"],
      subTitlesLinks: ["/", "/", "/"],
    },
  ];
  return (
    <div className="w-full h-full bg-white">
      {/* <SideBarWithSearch /> */}
      <NavbarThree
        logo={logo}
        logoWidth="180"
        logoHeight=""
        data={customData}
        btnOne="btn one"
        linkBtnOne="/"
        btnTwo="btn two"
        linkBtnTwo="/"
        navBgColor="#DDDDDD"
        navHeight="80px"
        mobileSideBarBg="#BBBBBB"
      />
    </div>
  );
};

export default Home;
