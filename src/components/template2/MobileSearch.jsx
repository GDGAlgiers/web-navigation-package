import Image from "next/image";
import React from "react";
import searchIcon from "public/images/template2/search.svg";

function MobileSearch({ setOpen }) {
  return (
    <div className="absolute py-5 flex justify-center gap-4 items-center w-full h-auto bg-white top-full left-0">
      <div
        className={`flex w-64 h-12 items-center border border-[#696969] rounded-[100px] justify-between p-4 bg-Light-grey-input text-[#696969]`}
      >
        <Image src={searchIcon} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none pl-5 flex-grow"
        />
      </div>
      <button className="text-[#696969]" onClick={() => setOpen(false)}>
        annuler
      </button>
    </div>
  );
}

export default MobileSearch;
