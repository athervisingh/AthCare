import React from 'react'
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
      <div className='bg-black p-2 z-50 text-white flex justify-between px-4 fixed bottom-0 w-full'>
          
     
              
          <div className='flex justify-between w-1/2 font-serif'>
              <div className='flex'>
                  <div><Image className='rounded-full p-1' width={50} height={50} src="/image/pic1.png" alt="Logo" /></div>
                  <div className='font-bold text-xs text-white relative top-2 pl-1 max-md:hidden'>
                      <span className='text-white'></span>
                      <span>Ath</span>
                      <span className='text-green-400'>Care</span>
                      <div className='text-[9px] text-white'>Your Support , Their Survival</div>
                  </div>
              </div>
              <div className='relative left-32 top-3 cursor-pointer max-md:hidden'>Copyright &copy; {currentYear} Designed By <span className='font-extralight'>@ATHERVI</span>
              <hr className='opacity-50' /></div>
              </div>
                 

              <div className='flex gap-4'>
                  <div className='font-bold text-white relative top-3 max-sm:text-[10px] max-sm:top-1'>Follow Us</div>
                  <div className='flex gap-4 relative top-2'>
                      <a href="https://www.linkedin.com/in/athervi-singh/"><Image className='rounded-full' width={32} height={32} src="/image/lin.gif" alt="" /></a>
                      <a href="https://x.com/AtherviSingh"><Image className='rounded-full' width={32} height={32} src="/image/X.gif" alt="" /></a>
                      <a href="https://www.youtube.com/@athervisingh"><Image className='rounded-full' width={32} height={32} src="/image/Utube.gif" alt="" /></a>
                      <a href="https://www.instagram.com/athervisingh001/"><Image className='rounded-full' width={32} height={32} src="/image/insta.gif" alt="" /></a>
                  </div>
              </div>

    
          
    </div>
  )
}

export default Footer
