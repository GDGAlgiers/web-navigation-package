import Navbar from "@/components/template1/Navbar";
import Navbar2 from "@/components/template2/Navbar";
import logo from "public/Images/template1/Navbar/logo-botw.png";
import profilpic from "public/Images/template1/Navbar/profilpic.svg";
import settingsIcon from "public/images/template2/settings.svg";
import uploadIcon from "public/images/template2/upload.svg";

const Home = () => {
  const links = [
    {
      name: "Home",
      route: "/",
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
      {/* <Navbar
        links={links}
        loginRoute="/login"
        menuType="bottom-bar"
        ButtonColor="red"
        SignInRoute="/Signin"
        logo={logo}
        textColor="#3A4F39"
        textSize="18px"
        logoProfil={profilpic}
        layout="Fixed"
      /> */}
      <Navbar2
        links={[
          { link: "#", name: "settings", icon: settingsIcon },
          { link: "#", name: "upload", icon: uploadIcon },
        ]}
      />
    </div>
  );
};

export default Home;
