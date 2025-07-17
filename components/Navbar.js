"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return <>
    signed in as (session.user.email) <br/>
    <button onClick={() => signOut()}>Sign out</button>
    </>;
  }
    
    return (


    <nav className='bg-gray-900 shadow-lg  shadow-white  text-white flex items-center justify-between px-4 h-16 '>
        <div className="logo font-bold text-lg flex justify-center items-center" >
          <img src="tea.gif" width={44} alt="" />
          <span>GMAC</span>
          </div>
        
        
        {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul> */}

        <div>
          <Link href={"/login"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent" >login</span>
          </button>
          </Link>  
        </div>
    </nav>
  )
}

export default Navbar
