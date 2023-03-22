'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from "next/navigation";

export default function NavbarItem({title,param}) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

  return (
    <div className='w-28'>

        <Link className={`hover:text-amber-700 transition-colors duration-200 dark:text-white ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg "}`} href={`/?genre=${param}`}>
        <p>{title}</p>
        </Link>
        
    </div>
  )
}
