"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <div className='bg-black flex justify-between fixed z-50 w-[100vw]'>
   
<Link href='/'>
    <div className='flex text-white font-bold items-center'>
        <Image src="/image/pic1.png" width={56} height={56} className='p-2 rounded-full' alt="pic" />  
        <div className='text-xl font-serif' >Ath<span className='text-green-400'>Care</span>
  
        </div>
        </div>
        
        </Link>



      <div className='pt-2 relative'>
        {session && <>
          <button onClick={() => { setShowdropdown(!showdropdown) }} onBlur={() => { setTimeout(() => { setShowdropdown(false)},300); }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 bg-blue-700 hover:bg-blue-800 mx-4 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 max-sm:m-0 max-sm:mx-1 max-sm:text-[10px] max-sm:p-1 max-sm:px-2 " type="button">WellCome <span className='max-sm:hidden'>{session.user.email} </span><svg className="w-2.5 h-2.5 ms-3 max-sm:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[135px] max-sm:left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 max-sm:w-32`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href={"/dashboard"}  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
      </li>
      <li>
        <Link href="/" onClick={()=>{signOut()}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>
</>}
        {session &&
         <Link href ={"/"}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center mx-4 mr-6 me-2 mb-2 max-sm:m-0 max-sm:mx-1 max-sm:text-[10px] max-sm:p-1 max-sm:px-2" onClick={() => { signOut() }}>Log Out</button> </Link>}
         
        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center ml-6 me-2 mb-2">Login</button>
      </Link>} 

      </div>
       
        


  

    </div>
  )
}

export default Navbar