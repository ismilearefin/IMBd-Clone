import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center items-center min-h-[70px] dark:bg-gray-600 bg-amber-100 '>
        <NavbarItem title="Treanding" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
