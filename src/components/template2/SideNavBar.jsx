import Image from 'next/image'
import Link from 'next/link'
import Pic from 'public/Images/template2/picture.png'
import Arrow from 'public/Images/template2/Down.svg'
import Calendar from 'public/Images/template2/Calendar.svg'
import Overview from 'public/Images/template2/Grid_Four.svg'
import List from 'public/Images/template2/View_List.svg'
import Chat from 'public/Images/template2/Chat_Dots.svg'
import Settings from 'public/Images/template2/Settings.svg'
import Shop from 'public/Images/template2/Shopping_Cart.svg'
import Support from 'public/Images/template2/Support.png'
import Collapse from 'public/Images/template2/Subtract.svg'
import Gift from "public/Images/template2/Gift.svg";
import Gift1 from "public/Images/template2/Gift1.svg";
import Gift2 from "public/Images/template2/Gift2.svg";

import { useState } from 'react'


const SideNavBar = () => {
  const [active, setActive] = useState(true)
    return (
      <aside className="flex flex-col items-center justify-between h-[100vh] gap-5 px-6 py-5 overflow-y-scroll bg-white w-80">
        {/* a Wrapper div  */}
        <div className="mt-2">
          {/* Profile pic and preview */}
          <div className="flex items-center px-5 py-2 border-2 justify-evenly rounded-3xl">
            <Image src={Pic} alt="Profile Picture" />
            <div className="px-3">
              <h1 className="text-lg font-bold text-primary">Kate Russell</h1>
              <p className="text-sm opacity-50 text-primary">Project Manager</p>
            </div>
            <Image src={Arrow} />
          </div>
          {/* Links Overview */}
          <div className="flex flex-col mt-4">
            <Link href={"/"}>
              <div className="flex items-center gap-4 p-4">
                <Image alt="Overview" src={Overview} />
                <h1 className="text-lg font-medium text-primary">Overview</h1>
              </div>
            </Link>
            {/* Shop Item */}
            <Link href={"/"}>
              <div className="flex items-center gap-4 p-4">
                <Image alt="Shop" src={Shop} />
                <h1 className="text-lg font-medium text-primary">Shop</h1>
              </div>
            </Link>
            {/* Released Item */}
            <Link href={"/"}>
              <div className="flex items-center gap-4 p-4">
                <Image alt="View List" src={List} />
                <h1 className="text-lg font-medium text-primary">Released</h1>
              </div>
            </Link>
            {/* Comments Item */}
            <Link href={"/"}>
              <div className="flex items-center gap-4 p-4">
                <Image alt="View List" src={Chat} />
                <h1 className="text-lg font-medium text-primary">Comments</h1>
              </div>
            </Link>
            <div className="flex flex-col justify-center">
              {/* Settings Item */}
              <Link href={"/"}>
                <div className="flex items-center gap-4 p-4 border-1">
                  <Image alt="circle and line" src={Settings} />
                  <h1 className="text-lg font-medium text-primary">Settings</h1>
                </div>
              </Link>
              <div className="flex flex-col justify-center px-5">
                {/*First Sub Settings Item */}
                <div className="flex items-center gap-4 border-1">
                  <Image alt="circle and line" src={Gift} />
                  <h1 className="text-base font-medium text-gray-500">
                    Edit Profile
                  </h1>
                </div>
                {/*Middle Sub Settings Item */}
                <div className="flex items-center gap-4 border-1">
                  <Image alt="circle and line" src={Gift1} />
                  <h1 className="text-base font-medium text-gray-500">
                    Language
                  </h1>
                </div>
                {/*Middle Sub Settings Item */}
                <div className="flex items-center gap-4 border-1">
                  <Image alt="circle" src={Gift1} />
                  <h1 className="text-base font-medium text-[#317BFF]">
                    Payment
                  </h1>
                </div>
                <div className="flex items-center gap-4 border-1">
                  <Image alt="circle and line" src={Gift2} />
                  <h1 className="text-base font-medium text-gray-500">
                    Payment
                  </h1>
                </div>
              </div>
            </div>
            {/* Calendar Item */}
            <Link href={"/"}>
              <div className="flex items-center gap-4 p-4">
                <Image alt="View List" src={Calendar} />
                <h1 className="text-lg font-medium text-primary">Schedule</h1>
              </div>
            </Link>
          </div>
        </div>
        {/* Wrapper Div */}
        <div>
          <Link href={"/"}>
            <div className="flex items-center justify-center gap-4 px-6 py-3 border-2 border-gray-300 rounded-2xl">
              <Image alt="Support" src={Support} />
              <div>
                <h1 className="text-lg font-bold text-primary">Help Center</h1>
                <p className="text-sm opacity-50 text-primary">Answer Here</p>
              </div>
              <Image src={Arrow} className="-rotate-90" />
            </div>
          </Link>
          <div className="flex items-center gap-4 p-4">
            <Image alt="Collapse" src={Collapse} />
            <h1 className="text-lg font-medium text-gray-400">
              Collapse items
            </h1>
          </div>
        </div>
      </aside>
    );
}
 
export default SideNavBar;
