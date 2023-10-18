import Sidenavbar3 from "@/components/template3/SideNabBar";
import Navbar from "@/components/template1/Navbar";
import logo from "public/Images/template1/Navbar/Logo.svg";
import profilpic from "public/Images/template1/Navbar/profilpic.svg";

const Home = () => {
  const links = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Landing",
      route: "/landing",
    },
    {
      name: "About",
      route: "/About",
    },
    {
      name: "Contact",
      route: "/",
    },
  ];
  return (
    <div className="w-full h-[150vh] bg-black">
      <Navbar links={links} loggedIn logo={logo} textColor="#3A4F39" menuType="bottom-bar" textSize="18px" logoProfil={profilpic} layout="Fixed" />
    </div>
  );
};

export default Home;
