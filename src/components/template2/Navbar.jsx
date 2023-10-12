import React from "react";
import Image from "next/image";
import avatar from "public/images/template2/avatar.svg";
import arrowDown from "public/images/template2/arrow-down.svg";
import logo from "public/images/template2/logo.svg";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white h-24 w-full px-4 md:px-6 lg:px-14 xl:px-16 2xl:px-24">
      <div className="flex-1 flex items-center justify-start h-ful gap-4">
        <Link href="#">
          <Image height={24} width={24} src={avatar} alt="avatar" />
        </Link>
        <span className="flex items-center">
          Catalog{" "}
          <Image height={24} width={24} src={arrowDown} alt="arrow down" />
        </span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image src={logo} alt="logo" className=" h-20" />
      </div>

      <ul className="flex-1 flex gap-4 lg:gap-9 xl:gap-11 2xl:gap-16 items-center justify-end h-full">
        <li>
          <Link href="#">Delivery</Link>
        </li>
        <li>
          <Link href="#">Payment</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
