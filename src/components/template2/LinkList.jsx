"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Arrow from "public/Images/template2/Down.svg";
import Gift from "public/Images/template2/Gift.svg";
import Gift1 from "public/Images/template2/Gift1.svg";
import Gift2 from "public/Images/template2/Gift2.svg";

export default function LinkList({ links, Open }) {
  const [linkOpen, setLinkOpen] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);
  const selectElement = (item) => {
    setSelectedElement(item);
  };
  const selectChild = (child) => {
    setSelectedChild(child);
  };
  return (
    <ul className={`flex flex-col gap-1 ${Open && "mt-8"}`}>
      {links.map((element, index) =>
        !element.children ? (
          <li
            key={index}
            className={`items-center w-full drop-shadow-xl rounded-xl ${
              element === selectedElement
                ? "bg-blue-500 text-white"
                : "hover:bg-zinc-300 hover:text-zinc-500"
            }`}
            onClick={() => {
              selectElement(element);
            }}
          >
            <Link href={element.link}>
              <div className="flex items-center gap-4 p-4">
                <Image src={element.icon} alt={element.name} />
                {/* logo */}
                <h1
                  className={`text-lg font-medium text-primary duration-300  ${
                    !Open && "scale-0"
                  }`}
                >
                  {element.name}
                </h1>
              </div>
            </Link>
          </li>
        ) : (
          /* If the item has children */
          <li key={index} className="items-center w-full">
            <Link href={element.link}>
              <div
                className={`flex items-center justify-between p-4 drop-shadow-xl rounded-xl ${
                  element === selectedElement
                    ? "bg-blue-500 text-white"
                    : "hover:bg-zinc-300 hover:text-zinc-500"
                } ${!Open && "p-0"}`}
                onClick={() => {
                  selectElement(element);
                }}
              >
                <div className="flex items-center gap-4">
                  <Image src={element.icon} alt={element.name} />
                  <h1
                    className={`text-lg font-medium text-primary duration-300  ${
                      !Open && "scale-0"
                    }`}
                  >
                    {element.name}
                  </h1>
                </div>
                <Image
                  src={Arrow}
                  alt="Arrow"
                  onClick={() => {
                    setLinkOpen(!linkOpen);
                  }}
                  className={`${linkOpen ? "rotate-0" : "-rotate-180"}`}
                />
              </div>
            </Link>
            <ul
              className={`${
                linkOpen ? "flex flex-col items-end justify-end" : "hidden"
              }`}
            >
              {element.children.map((child, index) => (
                <li
                  key={index}
                  className={`items-center w-11/12 p-4 drop-shadow-xl rounded-xl ${
                    !Open && "hidden"
                  }`}
                  onClick={() => {
                    selectChild(child);
                  }}
                >
                  <Link href={child.link}>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-2 h-2 rounded-full  ${
                          selectedChild === child
                            ? "bg-blue-600"
                            : "bg-slate-600"
                        }`}
                      />
                      <h1
                        className={`text-lg font-medium text-primary duration-300  ${
                          !Open && "scale-0"
                        }`}
                      >
                        {child.name}
                      </h1>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        )
      )}
    </ul>
  );
}
