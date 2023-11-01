import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

import { useRouter } from "next/router";
import ItemChildrenList from "./ItemChildrenList";
import { ListLink } from "../../types/linkType";
import { generaleStyle } from "../../types/generaleStyleType";

type Props = {
  links: ListLink[],
  Open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  generaleStyles: generaleStyle
}

export default function LinkList({ links, Open, setOpen, generaleStyles } : Props) {
  const [selectedElement, setSelectedElement] = useState<ListLink | null>(null);
  const [selectedChild, setSelectedChild] = useState<ListLink | null>(null);
  const {
    textSize,
    textColor,
    BackgroundColor,
    ActiveTextColor,
  } = generaleStyles;
  const router = useRouter();

  return (
    <ul
      className={`flex flex-col gap-1 px-1 ${Open && "mt-8"}`}
      style={{ color: `${textColor}`, fontSize: `${textSize}` }}
    >
      {links.map((element, index) =>
        !element.childItems ? (
          <li
            key={index}
            className={`items-center w-full drop-shadow-xl rounded-xl ${
              element.link === router.pathname
                ? "border"
                : "drop-shadow-xl rounded-xl hover:bg-zinc-300"
            }`}
            onClick={() => {
              setSelectedElement(element);
            }}
            style={{
              backgroundColor: `${
                element.link == router.pathname && BackgroundColor
              }`,
            }}
          >
            <Link href={element.link as string}>
              <div className={`flex items-center gap-2 md:gap-4 p-3 ${(!Open) && 'justify-center'}`}>
                <Image src={element.icon} alt={element.name} />
                {/* logo */}
                <h1
                  className={`flex text-lg font-medium duration-300  ${
                    !Open && "hidden"
                  }`}
                >
                  {element.name}
                </h1>
              </div>
            </Link>
          </li>
        ) : (
          /* If the item has children */
          <ItemChildrenList
            key={index}
            element={element}
            setSelectedElement={setSelectedElement}
            textColor={textColor}
            setSelectedChild={setSelectedChild}
            ActiveTextColor={ActiveTextColor || "rgb(37 99 235)"}
            Open={Open}
            setOpen={setOpen}
          />
        )
      )}
    </ul>
  );
}
