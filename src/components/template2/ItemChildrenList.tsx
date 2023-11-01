import Link from "next/link";
import Arrow from "public/Images/template2/Down.svg";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { ListLink } from "../../types/linkType";

type Props = {
    element: ListLink,
    setSelectedElement: Dispatch<SetStateAction<ListLink | null>>,
    textColor: string,
    setSelectedChild: Dispatch<SetStateAction<ListLink | null>>,
    ActiveTextColor: string,
    Open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const ItemChildrenList = ({
    element,
    setSelectedElement,
    textColor,
    setSelectedChild,
    ActiveTextColor,
    Open,
    setOpen
} : Props) => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="items-center">
            <Link href={element.link as string}>
                <div
                    className={`flex items-center p-3 drop-shadow-xl rounded-xl hover:bg-zinc-300 hover:text-zinc-500 ${
                    element.link === router.pathname && "border text-white"
                    } ${!Open ? "p-0 justify-center" : "justify-between"}`}
                    onClick={() => {
                        setSelectedElement(element);
                        (!Open) && setOpen(true);
                    }}
                >
                    <div className="flex items-center gap-2 md:gap-4">
                        <Image src={element.icon} alt={element.name} />
                        <h1
                            className={`flex text-lg font-medium duration-300  ${
                            !Open && "hidden"
                            }`}
                            style={{ color: `${textColor}` }}
                        >
                            {element.name}
                        </h1>
                    </div>
                    <Image
                        src={Arrow}
                        alt="Arrow"
                        onClick={() => {
                            setIsOpen((prev) => !prev);
                        }}
                        className={`${isOpen ? "rotate-0" : "-rotate-180"} ${!Open && "hidden"}`}
                    />
                </div>
            </Link>
            <ul
            className={`${
                isOpen ? "flex flex-col items-end justify-end" : "hidden"
            }`}
            >
            {element.childItems?.map((child, index) => (
                <li
                key={index}
                className={`flex items-center w-11/12 p-4 drop-shadow-xl rounded-xl hover:bg-zinc-300 ${
                    !Open && "hidden"
                }`}
                onClick={() => {
                    setSelectedChild(child);
                }}
                >
                    <Link href={element.link as string + child.link}>
                        <div className="flex items-center gap-4">
                        <div
                            className={`w-2 h-2 rounded-full duration-300 `}
                            style={{
                            backgroundColor: `${
                                element.link as string + child.link === router.pathname
                                ? ActiveTextColor
                                : textColor
                            }`,
                            opacity: `${
                                element.link as string + child.link === router.pathname
                                ? 1
                                : 0.7
                            }`,
                            }}
                        />
                            <h1
                                className={`flex text-lg font-medium duration-300 ${
                                !Open && "hidden"
                                }`}
                                style={{
                                color: `${
                                    element.link as string + child.link === router.pathname
                                    ? ActiveTextColor
                                    : textColor
                                }`,
                                opacity: `${
                                    element.link as string + child.link === router.pathname
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
}

export default ItemChildrenList