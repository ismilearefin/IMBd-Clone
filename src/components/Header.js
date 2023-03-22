import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/Ai'
import {AiFillInfoCircle} from 'react-icons/Ai'

export default function Header() {
  return (
    <div className="w-full">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <div className="flex gap-3 mx-3">
        <MenuItem title='HOME' address='/' Icon={AiFillHome}/>
        <MenuItem title='ABOUT' address='/about' Icon={AiFillInfoCircle}/>
        {/* two button */}
      </div>
      <div>
        {/* another is logo */}
        <h2><span className="mr-1 px-2 py-1 rounded-md bg-amber-600 text-black text-2xl font-bold">IMDb</span><span className="text-xl font-bold hidden sm:inline">Clone</span></h2>
        {/* one button for theme change */}
        
      </div>
    </div>
    </div>
  )
}