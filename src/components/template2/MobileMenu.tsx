import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ListLink } from "../../types/linkType";

type Props = {
  links: ListLink[]
}

function MobileMenu({ links } : Props) {
  return (
    <div className="absolute border-t border-[#A0A0A0]  w-full h-auto bg-white top-full left-0">
      <ul className="flex flex-col p-4 gap-6">
        {links.map((item) => (
          <li>
            <Link className="flex items-center gap-4" href={item.link as unknown as string || "#"}>
              <Image src={item.icon} alt={item.name} className="h-full w-auto" />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;
