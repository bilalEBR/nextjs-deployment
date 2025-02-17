
"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



const Navbar = () => {
  const pathname = usePathname()  // Access the current path with usePathname

  // Function to check if the current path is the active link
  const isActive = (path: string) => {
    return pathname === path ? 'active' : ''
  }

  return (
    <div className="container">
      <div className="grid grid-cols-4 sm:pace-item-start sm:grid-cols-4 lg:grid-cols-8 w-fit gap-5 mx-auto font-medium py-4 text-blackish">
        <Link className={`navbar__link relative ${isActive('/')}`} href="/">HOME</Link>
        <Link className={`navbar__link relative ${isActive('/pages')}`} href="/pages">CATEGORIES</Link>
        <Link className={`navbar__link relative ${isActive('/mens')}`} href="/mens">MEN</Link>
        <Link className={`navbar__link relative ${isActive('/womens')}`} href="/womens">WOMEN</Link>
        <Link className={`navbar__link relative ${isActive('/jewelery')}`} href="/jewelery">JEWELERY</Link>
        <Link className={`navbar__link relative ${isActive('/perfume')}`} href="/perfume">PERFUME</Link>
        <Link className={`navbar__link relative ${isActive('/blog')}`} href="#">BLOG</Link>
        <Link className={`navbar__link relative ${isActive('/hot-offers')}`} href="#">HOT OFFERS</Link>
      </div>
    </div>
  )
}

export default Navbar
