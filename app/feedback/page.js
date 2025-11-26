"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useEffect } from 'react';

const Feedback = () => {
   useEffect(() => {
     document.title="AthCare - Share Your Feedback"
   }, [])
   


    const sendMsg = () => {
        toast('🦄 Your message has been sent successfully. We will respond within 24 hours!!', {
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
    <div className='text-white min-h-[88vh] font-serif mx-2'>
     

      <h1 className='pt-20 p-5 pb-4 font-bold underline text-2xl'>Contact US</h1>
      <p className='ml-10'>We&apos;d love to hear from you! If you have any questions, suggestions, or need assistance with <b>AthCare</b>, please feel free to reach out to us.</p>

      <div className='ml-20 mt-5 max-md:ml-5'>
        <h1 className='text-xl underline'>Contact Form</h1>
        <form action="" className='flex flex-col gap-5 ml-5 mt-5'>
          <div>
            <span className='font-bold'>NAME : </span>
            <input type="text" placeholder='Enter your Name...' className='rounded-full pl-3 bg-gray-400 text-black  placeholder:text-gray-700  ' />
          </div>
          <div>
            <span className='font-bold'>Email : </span>
            <input type="text" placeholder='Enter your Email...' className='rounded-full pl-3 bg-gray-400 text-black  placeholder:text-gray-700  ' />
         </div>
          <div>
            <span className='font-bold'>Message : </span>
            <input type="text" placeholder='Write your issues and feedbacks...' className='rounded-full pl-3 bg-gray-400 text-black  placeholder:text-gray-700  w-72 max-md:w-56' />
         </div>
          
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-lg rounded-lg font-bold text-center w-44 mb-2" onClick={()=>{sendMsg()}}>Send</button>
        </form>
      </div>


      <div className='ml-20 mt-5 mb-7 max-md:ml-5'>
        <h1 className='text-xl underline'>Contact Information</h1>
        <ul className='mt-5 ml-5'>
          <li><span className='font-bold'>Email:</span> <a href="/">support@athcare.com</a></li>
          <li><span className='font-bold'>Phone:</span> <a href="/">+1-800-123-4567</a></li>
          <li><span className='font-bold'>Address:</span> 123 Secure Lane, Tech City, TX 78910, USA</li>
        </ul>
      </div>
<hr className='opacity-30 '/>

      <p className='font-mono text-center mt-3 opacity-80'>
        Our support team is available to help you with any issues or questions you may have. We aim to respond to all inquiries within 24 hours.
      </p>
      
      <p className='font-mono text-center mt-6 opacity-80 pb-20'>
        🌟🌟Thank you for reaching out!🌟🌟
      </p>
            </div>
            </>
  )
}

export default Feedback
