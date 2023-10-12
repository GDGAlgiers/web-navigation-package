import Image from 'next/image'
import Link from 'next/link'
import Pic from 'public/Images/template2/picture.png'
import Arrow from 'public/Images/template2/Down.svg'
const SideNavBar = () => {
    return (
      <aside className="h-screen overflow-y-scroll bg-white w-[23vw] px-6 py-5 flex flex-col gap-5">
        {/* nav bar */}
        {/* Profile pic and preview */}
        <div className="flex items-center px-5 py-2 border-2 justify-evenly rounded-3xl">
          <Image src={Pic} alt="Profile Picture" />
          <div className="px-3">
            <h1 className="text-lg font-bold text-primary">Kate Russell</h1>
            <p className="text-sm opacity-50 text-primary">Project Manager</p>
          </div>
          <Image src={Arrow} />
        </div>
        {/* link */}
        <div className="flex flex-col">
          <ul className='w-full'>
            <Link href={"/"}><li></li></Link>
          </ul>
        </div>
      </aside>
    );
}
 
export default SideNavBar;
