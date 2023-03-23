import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <div className="w-full">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <div className="flex gap-3">
        <MenuItem title='HOME' address='/' Icon={AiFillHome}/>
        <MenuItem title='ABOUT' address='/about' Icon={AiFillInfoCircle}/>
        {/* two button */}
      </div>
      <div className="flex items-center gap-2">
        <DarkModeButton></DarkModeButton>
       <Link href='/'>
       <h2><span className="mr-1 px-2 py-1 rounded-md bg-amber-600 text-white text-2xl font-bold">IMDb</span><span className="text-xl font-bold hidden sm:inline">Clone</span></h2>
       </Link>
      </div>
    </div>
    </div>
  )
}
