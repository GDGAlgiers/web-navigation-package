import Image from "next/image";
import Link from "next/link";

const Navbar = (props) => {
  const { links , loggedIn,logo ,layout,textColor,textSize,menuType,logoProfil} = props;
  return (
    <div className={`flex items-center justify-between pr-3 w-full bg-[#fff] h-24 ${ layout=="Fixed" && "fixed"  } top-0 `}>
      <div className="flex items-center gap-10">
        <Image alt="logo" src={logo} />
        <div style={{color:`${textColor}`, fontSize:`${textSize}`}} className={`flex items-center gap-16 `}>
          {links.map((link, index) => {
            return (
              <Link key={index} href={`${link.route} `}  >
                {" "}
                {link.name}{" "}
              </Link>
            );
          })}
        </div>
      </div>
      {loggedIn ? (
        <Image alt="profilpic" src={logoProfil} />
      ) : (
        <div className="flex items-center gap-3 ">
          <button className="rounded-[4px] text-[#3A4F39] border-[#3A4F39] w-32 text-lg p-3 border "> Log In </button>
          <button className="rounded-[4px] bg-[#3A4F39] text-white w-32 text-lg p-3 border "> Sign In </button>
        </div>
      )}
    </div>
  );
};


// generaleStyles={{
//   textColor: "....",
//   textSize: "...",0
//   borderColor: "....",
// }}
// mobileSettings={{
//   menuType: "hamburger", // Options: "hamburger", "sidebar", "bottom-bar", etc,

export default Navbar;
