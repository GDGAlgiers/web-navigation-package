import logo from "public/Images/template1/Navbar/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import profilpic from "public/Images/template1/Navbar/profilpic.svg"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pr-3 w-full bg-[#fff] h-24 ">
      <div className="flex items-center gap-10">
        <Image alt="logo" src={logo} />
        <div className="flex items-center gap-16 text-[#2D2E2E] ">
          <Link href={"/"}> Catalog </Link>
          <Link href={"/"}>Delivery</Link>
          <Link href={"/"}>Payment</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
      <Image alt="profilpic" src={profilpic} />
    </div>
  );
};

export default Navbar;
