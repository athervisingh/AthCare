"use client";

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { fetchuser, updateProfile } from '@/actions/useractions';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import Image from 'next/image';

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})




  useEffect(() => {
    document.title=" AthCare Dashboard - Manage Your Profile"

    if (!session) {
     
    router.push('/login')
    }
     getData()
}, [router,session ,getData])


  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setform(u)
  }


  const handleChange = (e) => {
    setform({...form,[e.target.name]:e.target.value})
  }
  
  const handleSubmit = async (e) => {
    await updateProfile(e,session.user.name)
     toast('🦄 Profile Updated !!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
  }
  
  return (
    <>
      
       <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>
<Image src="/image/dog.png" width={144} height={144} alt="dog" className='fixed pb-14 invert max-sm:w-20 bottom-0' />
      <div className='text-white font-serif'>
        <div className='pt-20 text-center font-extrabold text-4xl max-sm:text-xl'>Welcome to your Dashboard</div>
        <form className="w-1/3 mx-auto mt-12 max-lg:w-1/2 max-md:w-[80vw]" action={handleSubmit}>
       
            <label htmlFor="name" className="block mb-2 mt-4 text-lg font-bold text-gray-900 dark:text-white">Name</label>
            <input type="text" onChange={handleChange} value={form.name?form.name:""} name='name' id="name" className="block w-full px-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
       
      
            <label htmlFor="email" className="block mb-2 mt-4 text-lg font-bold text-gray-900 dark:text-white">Email</label>
            <input type="text" onChange={handleChange} value={form.email?form.email:""} name='email' id="email" className="block w-full px-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
     
            <label htmlFor="username" className="block mb-2 mt-4 text-lg font-bold text-gray-900 dark:text-white">Username</label>
            <input type="text" onChange={handleChange} value={form.username?form.username:""} name='username' id="username" className="block w-full px-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        
            <label htmlFor="profilePic" className="block mb-2 mt-4 text-lg font-bold text-gray-900 dark:text-white">Profile Picture</label>
            <input type="text" onChange={handleChange} value={form.profilePic?form.profilePic:""} name='profilePic' id="profilePic" className="block w-full px-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        
            <label htmlFor="coverPic" className="block mb-2 mt-4 text-lg font-bold text-gray-900 dark:text-white">Cover Picture</label>
            <input type="text" onChange={handleChange} value={form.coverPic?form.coverPic:""} name='coverPic' id="coverPic" className="block w-full px-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          
          <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-extrabold rounded-lg text-xl px-3 py-1 text-center mt-10 w-full me-2 mb-2">Save</button>
        </form>


       
      </div>
    </>
  )
}

export default Dashboard
