import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from "public/Images/template2/Down.svg";
import Gift from "public/Images/template2/Gift.svg";
import Gift1 from "public/Images/template2/Gift1.svg";
import Gift2 from "public/Images/template2/Gift2.svg";
import { useRouter } from "next/router";

export default function LinkList({ links, Open , generaleStyles}) {
  const [linkOpen, setLinkOpen] = useState(true);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);
  const {
    textSize,
    textColor,
    HoverColor,
    BorderColor,
    BackgroundColor,
    ActiveTextColor,
  } = generaleStyles;
  const router = useRouter();
  const selectElement = (item) => {
    setSelectedElement(item);
  };
  const selectChild = (child) => {
    setSelectedChild(child);
  };

  useEffect(() => {
    const data = localStorage.getItem("LINK_IS_OPEN_VALUE");
    if (data) {
      setLinkOpen(!!data);
      console.log(!!data);
      console.log(linkOpen);
    } else {
      localStorage.setItem("LINK_IS_OPEN_VALUE", false);
    }
  }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("LINK_IS_OPEN_VALUE", JSON.stringify(linkOpen));
  // }, [linkOpen]);

  const toggleArrow = () => {
    setLinkOpen((prev) => !prev);
    localStorage.setItem("LINK_IS_OPEN_VALUE", linkOpen);
  };

  return (
    <ul
      className={`flex flex-col gap-1 ${Open && "mt-8"}`}
      style={{ color: `${textColor}`, fontSize: `${textSize}` }}
    >
      {links.map((element, index) =>
        !element.children ? (
          <li
            key={index}
            className={`items-center w-full drop-shadow-xl rounded-xl ${
              element.link === router.pathname
                ? "border"
                : "drop-shadow-xl rounded-xl hover:bg-zinc-300"
            }`}
            onClick={() => {
              selectElement(element);
            }}
            style={{
              backgroundColor: `${
                element.link == router.pathname && BackgroundColor
              }`,
            }}
          >
            <Link href={element.link}>
              <div className="flex items-center gap-4 p-4">
                <Image src={element.icon} alt={element.name} />
                {/* logo */}
                <h1
                  className={`text-lg font-medium duration-300  ${
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
                className={`flex items-center justify-between p-4 drop-shadow-xl rounded-xl hover:bg-zinc-300 hover:text-zinc-500 ${
                  element.link === router.pathname && "border text-white"
                } ${!Open && "p-0"}`}
                onClick={() => {
                  selectElement(element);
                }}
              >
                <div className="flex items-center gap-4">
                  <Image src={element.icon} alt={element.name} />
                  <h1
                    className={`text-lg font-medium duration-300  ${
                      !Open && "scale-0"
                    }`}
                    style={{ color: `${textColor}` }}
                  >
                    {element.name}
                  </h1>
                </div>
                <Image
                  src={Arrow}
                  alt="Arrow"
                  onClick={toggleArrow}
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
                  <Link href={element.link + child.link}>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-2 h-2 rounded-full  duration-300 `}
                        style={{
                          backgroundColor: `${
                            element.link + child.link === router.pathname
                              ? ActiveTextColor
                              : textColor
                          }`,
                          opacity: `${
                            element.link + child.link === router.pathname
                              ? 1
                              : 0.7
                          }`,
                        }}
                      />
                      <h1
                        className={`text-lg font-medium duration-300 ${
                          !Open && "scale-0"
                        }`}
                        style={{
                          color: `${
                            element.link + child.link === router.pathname
                              ? ActiveTextColor
                              : textColor
                          }`,
                          opacity: `${
                            element.link + child.link === router.pathname
                              ? 1
                              : 0.7
                          }`,
                        }}
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
