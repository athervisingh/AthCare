import React from 'react'

const About = () => {
  return (
    <div className='text-white min-h-[85vh] font-serif'>

      <h1 className='pt-20 pb-4 flex justify-center font-bold underline text-2xl'>ABOUT US</h1>
        <hr className='opacity-30'/>
      <div className='flex  gap-4 max-md:flex-col max-md:items-center'>

        <div className='flex mt-6 border border-gray-400 w-1/3 justify-between border-opacity-35 ml-5 max-2xl:h-[30vh] max-2xl:overflow-scroll max-md:flex-col max-2xl:pt-8 max-md:w-[70vw]'>
          <div className='max-2xl:h-[218] max-md:flex max-md:justify-center'>
            <img src="image/athervi.png" className='w-36 bg-gray-400 pt-3 mt-12 ml-4 rounded-full border border-white max-2xl:w-16 max-2xl:mt-6' alt="" />
          </div>

          <div className='w-2/3 p-14 max-2xl:p-5  max-2xl:text-xs max-md:w-full '>
            Welcome to <b> AthCare</b>, a donation website created by <b> Athervi Singh </b>, a final-year <b> Computer Science </b> student. <b> AthCare is dedicated to protecting animals and birds </b> by making it easy for you to support them directly. Join us in making a difference today!
          </div>
          
        </div>
        <div className='p-10 mt-6 border border-gray-400 w-1/3 border-opacity-35 ml-5 max-2xl:h-[30vh] max-2xl:overflow-scroll max-md:w-[70vw]'>

          <h1 className='font-bold text-xl mb-6 max-2xl:text-sm  max '>Who We Are <hr className='opacity-30' /></h1>
          <div className=' max-2xl:text-xs'>
           AthCare is the brainchild of Athervi Singh, a passionate Computer Science student committed to protecting animals and birds. With a deep love for wildlife and a strong academic background, Athervi created AthCare to make it easier for people to contribute directly to animal welfare.
          </div>

        </div>
        <div className='p-10 mt-6 border border-gray-400 w-1/3 border-opacity-35 ml-5 mr-5 max-2xl:h-[30vh] max-2xl:overflow-scroll max-md:w-[70vw] max-md:mr-0'>

          <h1 className='font-bold text-xl mb-6 max-2xl:text-sm '>Our Mission <hr className='opacity-30' /></h1>
          <div className='max-2xl:text-xs '>
           Our mission is to create a simple and effective platform for supporting all animals and birds. In a world where these creatures face growing challenges, AthCare ensures that your contributions directly help those in need, with full transparency and a commitment to making a real impact.
          </div>

        </div>

      </div>


      <div className='m-5'>
        <h1 className='text-2xl mt-8 flex justify-center font-bold'>What We Offer</h1>
        <div className='flex justify-center'>
          <hr className='opacity-30 w-80 ' />
        </div>
        <div  className='flex justify-center mt-3 ml-10'>
          
          <dl className=''>
          <div className='flex gap-2 mb-1 mt-2'>
            <span className="block w-2 h-2 bg-white ml-2 rounded-full mt-2"></span>
              <dt className='font-medium text-[18px] ml-5'>Direct Impact:</dt>
              <dd className='mt-1'>AthCare ensures that your donations directly benefit animals and birds in need. We work on the ground to provide food, shelter, and medical care, ensuring that every contribution makes a real difference. </dd>
            </div>


            <div className='flex gap-2 mb-1'>
             <span className="block w-2 h-2 bg-white ml-2 rounded-full mt-2"></span>
              <dt className='font-medium text-[18px] ml-5'>Easy-to-Use Platform:</dt>
              <dd className='mt-1'>AthCare is designed with simplicity in mind, offering an intuitive interface that makes it easy to donate and track your impact. No technical expertise is required to navigate our platform and support the causes you care about.</dd>
            </div>

                      <div className='flex gap-2 mb-1'>
                            <span className="block w-2 h-2 ml-2 bg-white rounded-full mt-2"></span>
              <dt className='font-medium text-[18px] ml-5'>Global Reach:</dt>
              <dd className='mt-1'>Support animals and birds from anywhere in the world. AthCare connects you with local and global initiatives, making it easy to contribute no matter where you are.</dd>
            </div>

                      <div className='flex gap-2 mb-1'>
                            <span className="block w-2 h-2 ml-2 bg-white rounded-full mt-2"></span>
              <dt className='font-medium text-[18px] ml-5'>Transparency and Updates:</dt>
              <dd className='mt-1'> Stay informed about how your donations are making a difference. AthCare provides regular updates and reports, so you can see the direct impact of your support.</dd>
            </div>


                      <div className='flex gap-2 mb-1'>
                            <span className="block w-2 h-2 ml-2 bg-white rounded-full mt-2"></span>
              <dt className='font-medium text-[18px] ml-5'>Reliable Support:</dt>
              <dd className='mt-1'>We're here to help with any questions or concerns. Our dedicated support team is committed to ensuring your experience with AthCare is positive and fulfilling.</dd>
            </div>

          </dl>

        </div>
        

       
      </div>

      

      <div className='flex gap-52 justify-center m-5 mt-10 max-md:flex-col max-md:items-center max-md:gap-4'>
        

        <div>

          <h1 className='text-2xl mt-4 flex justify-center font-bold'>Our Vision</h1>
          <div className='flex justify-center'>
            <hr className='opacity-30 w-48 ' />
          </div>
          <p className='text-center mt-1'>
           We envision a world where every animal and bird <br /> receives the care and support they need. AthCare is committed to continuously improving <br /> our initiatives and expanding our reach, ensuring that your contributions make a lasting impact on the lives of these creatures.
          </p>
        </div>

        <div>

          <h1 className='text-2xl mt-4 flex justify-center font-bold'>Commitment to Care</h1>
          <div className='flex justify-center'>
            <hr className='opacity-30 w-96 max-sm:w-60 ' />
          </div>
          <p className='text-center mt-1 mx-2'>
         At AthCare, we prioritize the well-being of animals and birds. <br /> We continually enhance our programs and partnerships to ensure the highest standards of care and support. <br /> Your contributions are vital, and we take every measure to ensure they directly benefit those in need and make a meaningful impact.
          </p>
        </div>

      </div>


      <div className='mt-6'>

        <h1 className='text-2xl mt-4 flex justify-center font-bold'>Join Us</h1>
        <div className='flex justify-center'>
          <hr className='opacity-30 w-36 ' />
        </div>
        <p className='text-center mx-10 my-6'>
          Join the AthCare community today and be a hero for animals and birds! Your support will make a tangible difference, ensuring these creatures receive the care they deserve. With AthCare, your contributions create real change and offer you a chance to see the positive impact of your generosity. Together, we can make a world of difference!
        </p>
      </div>

    
    <hr  className='mt-14 opacity-35'/>
      <p className='pb-28 text-center text-sm font-mono mt-3 m-5'>😊 😊 😊 This description incorporates the name AthCare and maintains a professional and informative tone. 😊 😊 😊 </p>
    </div>
  )
}

export default About  

export const metadata = {
  title: "AthCare - About Us",
  description: "Discover our mission to provide direct support to animals in need and learn how you can make a difference.",
};