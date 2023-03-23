'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [search, setsearch] = useState('');
    const router = useRouter();

    function handleSubmit(e){
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className=" flex max-w-6xl gap-2 mx-auto justify-between items-center min-h-[70px]">
            <input className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
            value={search}
            onChange={(e)=>setsearch(e.target.value)} 
            type="text" placeholder="Search keywords..."/>
            <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400">Search</button>
        </form>

    </div>
  )
}
