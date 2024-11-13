"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const arr = [
        { text: 'Products', link: "/products" },
        { text: 'Blogs', link: "/blogs" },
        { text: 'Social Reviews', link: "/social-media" },
        { text: 'Admin Panel', link: "/admin" },
    ]

    const handleIsMenuOpen = () => {
        setIsMenuOpen(prev => !prev)
    }



    return (
        <div>
            <nav className=' hidden md:flex lg:flex lg:justify-around md:justify-between items-center px-8 md:px-4 py-3'>

                <div className='logo flex justify-center items-center gap-3'>
                    <div><Link href={"/"}>
                        <lord-icon
                            src="https://cdn.lordicon.com/gjpeglhr.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{ "height": "50px", "width": "50px" }}
                        >
                        </lord-icon>
                    </Link></div>
                    <div className='text-lg font-bold font-serif text-white'><Link href={"/"}>Meditation</Link></div>
                </div>

                <div className="middle">
                    <ul className='flex justify-center items-center text-lg gap-6 md:gap-3 text-white'>
                        <li><Link href={"/products"}>Products</Link></li>
                        <li><Link href={"/blogs"}>Blog</Link></li>
                        <li><Link href={"/social-media"}>Social Reviews</Link></li>
                        <li><Link href={"/admin"}>Admin</Link></li>
                    </ul>
                </div>


            </nav>

            {/* for mobile */}
            <div>
                <nav className='flex justify-between items-center px-4 md:hidden lg:hidden py-3'>
                    <div className='left flex justify-center items-center gap-3'>
                        <div><Link href={"/"}>
                            <lord-icon
                                src="https://cdn.lordicon.com/gjpeglhr.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#ffffff"
                                style={{ "height": "30px", "width": "30px" }}
                            >
                            </lord-icon>
                        </Link></div>
                        <div className='text-lg font-bold font-serif text-white'><Link href={"/"}>Meditation</Link></div>
                    </div>

                    <div className="right text-white cursor-pointer">
                        <div onClick={handleIsMenuOpen}><RxHamburgerMenu /></div>
                    </div>
                </nav>

                {isMenuOpen && <div className='h-screen text-black bg-white flex flex-col justify-start pt-16 gap-3 items-center'>
                    {arr.map((item, index) => (
                        <div key={index}>
                            <Link onClick={handleIsMenuOpen} href={item.link}>{item.text}</Link>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Navbar
