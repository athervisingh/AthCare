"use client"
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image'
export default function Home() {



   const [activeCard, setActiveCard] = useState(null);

  const handleButtonClick = (cardNumber) => {
      setActiveCard((prevActiveCard) => (prevActiveCard === cardNumber ? null : cardNumber));
  };


  
  return (

    <>
    <Link href ='/feedback'>  
        <button type="button" className=" max-[394px]:right-[-40px]  fixed right-[-48px] z-[60] top-1/2 transform -translate-y-1/2 rotate-90 bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm py-2 px-4 flex items-center justify-center">
  <span className="text-white text-lg font-bold transform -rotate-180">⭐ Feedback</span>
</button></Link>




      
      <div className="relative h-[100vh] z-40 bg-cover bg-center overflow-auto bg-no-repeat w-[100vw] max-md:bg-contain max-lg:bg-cover max-lg:h-[30hv]" style={{ backgroundImage: 'url(image/back.jpg)' }}>
        <div className="absolute inset-0 h-[100vh] max-lg:h-[30hv] bg-black opacity-60"></div>
        

        <div className='relative z-40 text-center font-serif h-[60vh] items-center'>

        <h1 className=" text-white text-6xl font-extrabold pt-16 pb-4 underline max-md:text-2xl">Welcome to Ath<span className='text-green-500'>Care</span></h1>
        <div className='flex justify-center mt-11'>
          <Image className='rounded-full max-md:w-20' width={176} height={176} src="/image/dog.gif" alt="dog" />
        </div>

          <div className='text-white text-2xl mt-3 font-bold'>
            Your Support,Their Survival
          </div>
          <div className='text-white flex justify-center text-wrap text-lg mt-12 mx-52 mb-4 h-16 max-md:h-44 max-lg:mx-16'>
                <p className='font-bold overflow-auto'>Welcome to AthCare, where our dedicated team works tirelessly to support animals and birds in need. We are committed to providing direct care and assistance, ensuring that every effort goes towards making a positive impact on their lives. Join us in our mission to offer love and support to animals and birds who need it most.</p>
          </div>
          <div className='mb-4 mt-7'>
            <Link href={'/login'}>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-lg py-2.5 text-center w-36 font-bold mb-2 max-sm:w-24 max-sm:text-sm">Start Here</button>
            </Link>
            <Link href='/about'>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-lg py-2.5 text-center w-36 font-bold me-2 mb-2 ml-6 max-sm:w-24 max-sm:text-sm">Read More</button>
            </Link>
          </div>

        </div>
       
       
      

      </div>
      
   


 <div className='relative z-40 flex justify-center text-3xl underline mt-8 font-bold text-white font-serif max-sm:text-2xl'>
          Show Your Love
        </div>  


<div className='relative z-40 flex mx-10 gap-4 max-md:flex-col my-20 perspective justify-center items-center'>
       

  <div id="card-1" className={`max-w-sm max-md:ml-0 max-md:mr-0 bg-white border ml-20 mr-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 perspective-1000 ${activeCard === 1 ? 'hover:rotate-y-0' : 'rotate-y-20'} hover:rotate-y-0`}>
    <Image className="rounded-t-lg" src="/image/donate(1).gif" width={500} height={500} alt="Donate Money" />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Donate Money</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your support provides medical care, food, and shelter to animals in need. Every contribution makes a difference.</p>
      <a href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg mb-2 max-sm:w-24 max-sm:text-sm">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>


  <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 perspective-1000 ${activeCard === 2 ? 'hover:rotate-y-0' : 'rotate-y-20'} hover:rotate-y-0`}
        id="card-2">
    <Image className="rounded-t-lg" src="/image/charity.gif" width={500} height={500} alt="Donate Food" />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Donate Food</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contributing food ensures our animals are always well-fed. Your generosity provides nourishment, making a significant difference!</p>
         <a href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg mb-2 max-sm:w-24 max-sm:text-sm">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>


  <div   className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 perspective-1000 ${activeCard === 3 ? 'hover:rotate-y-0' : 'rotate-y-20'} hover:rotate-y-0`}
        id="card-3">
    <Image className="rounded-t-lg" src="/image/donate.gif" width={500} height={500} alt="Donate Shelter" />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Donate Shelter</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your support provides medical care, food, and shelter to animals in need. Every contribution makes a difference.</p>
         <a href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg mb-2 max-sm:w-24 max-sm:text-sm">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
 </div>

      
   <div className="relative z-40 justify-center mb-10 text-white flex space-x-3 rtl:space-x-reverse">
      <button
        type="button"
       className={`w-3 h-3 rounded-full ${activeCard === 1 ? 'bg-blue-500' : 'bg-white'} transition-colors duration-300`}
          onClick={() => handleButtonClick(1)}
      ></button>
      <button
        type="button"
 className={`w-3 h-3 rounded-full ${activeCard === 2 ? 'bg-blue-500' : 'bg-white'} transition-colors duration-300`}
          onClick={() => handleButtonClick(2)}
      ></button>
      <button
        type="button"
     className={`w-3 h-3 rounded-full ${activeCard === 3 ? 'bg-blue-500' : 'bg-white'} transition-colors duration-300`}
          onClick={() => handleButtonClick(3)}
      ></button>
    </div>





    <div className='fixed h-[100vh] bg-cover bg-center opacity-60 bg-white bottom-0 flex items-center justify-center w-full'>
  <div 
    className="w-full h-full bg-center bg-cover"
    style={{ backgroundImage: "url('image/background.jpeg')" }}
  >
  </div>
      </div>
     
      


      <div className='relative z-40 w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white'>
         <div className='flex justify-center text-3xl underline pt-20 font-bold text-white font-serif max-sm:text-2xl'>
          AthCare Intro
        </div>

        <div className='flex justify-center mt-8 pb-32 '>
         <video src="video/vid1.mp4" controls className="rounded-2xl border-4 border-green-600 w-[40vw] max-sm:w-[50vh] mx-10 max-[336px]:w-[80vw]"></video>
        </div>
      </div>


    </>
   
  );
}
