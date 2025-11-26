"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const PaymentPage = ({ username }) => {


  const [paymentform, setPaymentform] = useState({
    name: `${username}`, message: "With this gift, I&apos;m helping to give animals the care they deserve. ❤️"
    , amount: ""
  })
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  const searchParams = useSearchParams();
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {


      toast('🦄 Thanks For DONATION !!', {
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

    router.push(`/${username}`)
  }, [])


  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }




  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);
    let dbpayemnts = await fetchpayments(username)
    setPayments(dbpayemnts)
  }

  const pay = async (amount) => {

    let a = await initiate(amount, username, paymentform)

    let orderId = a.id

    var options = {
      "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "AthCare", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
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



      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <Image src="/image/dog.png" alt="dog" width={144} height={144} className='fixed pb-14 invert max-sm:w-20 bottom-0' />
      <div className='pt-12 font-serif text-white'>
        <div className='relative'>
          <div className='absolute left-1/2 transform -translate-x-1/2 text-black bg-green-100/30 p-3 rounded-lg shadow-[4px_4px_6px_rgba(255,255,255,0.6)]'>
            <h1 className='text-4xl font-extrabold text-center mt-4 max-md:text-2xl'>AthCare: Every Life Matters</h1>
            <p className='font-semibold mt-1 text-center max-md:text-sm'>Creating a safe space and forever home for rescued animals!</p>
            <p className='font-semibold text-center max-md:text-sm'>Your kindness is a warm blanket for those in need</p>
            <Image src="/image/protect.png" width={160} height={160} className='max-md:w-16 bg-white rounded-full opacity-45 mx-auto mt-4' alt="" />
          </div>

          {currentUser.coverPic === "" ? <Image src="/image/top.webp" fill style={{ objectFit: 'cover' }} className="w-full h-[60vh]" alt="top" /> : <Image src={currentUser.coverPic} fill style={{ objectFit: 'cover' }} className="w-full h-[60vh]" alt="top" />}
          {currentUser.profilePic === "" ? <Image src='/image/animal.webp' fill style={{ objectFit: 'cover' }} alt="" className='w-44 absolute left-1/2 transform -translate-x-1/2 top-[90%] border-2 shadow-custom-dark border-white rounded-lg shadow-black max-md:w-32 max-sm:w-24' /> : <Image src={currentUser.profilePic} alt="animal dp" fill style={{ objectFit: 'cover' }} className='w-44 absolute left-1/2 transform -translate-x-1/2 top-[90%] border-2 shadow-custom-dark border-white rounded-lg shadow-black max-md:w-32 max-sm:w-24' />}
        </div>

        <div className='mt-36 max-md:mt-24 max-sm:mt-14 mx-2'>
          <h1 className='text-xl max-md:text-lg font-extrabold text-center max-sm:text-sm'>@{username}</h1>
          <h1 className='text-sm text-center text-gray-400 mt-1 '>Payments : {payments.length} &nbsp; &nbsp; Total Donation Amount : &#8377;{payments.reduce((a, b) => a + parseInt(b.amount), 0)} </h1>
          <p className='font-semibold mt-7 max-md:mt-3 text-center text-3xl max-sm:text-lg'>👋 Welcome! {username} </p>
          <p className='font-semibold mt-1 text-center text-lg max-sm:text-sm max-sm:mt-0'>💰 Your Donation Makes You a Guardian 🛡️ of Nature&apos;s Voices 🌿🐾🕊️!</p>
        </div>


        <div className='flex w-[80vw] max-xl:w-[60vw] max-sm:w-fit justify-center items-center mt-20 mx-auto pb-36 gap-8 max-xl:flex-col'>
          <div className='w-1/2 h-[73vh] max-xl:h-[90vh] overflow-auto  bg-slate-950 shadow-custom-dark shadow-white rounded-2xl max-xl:w-full'>
            <h1 className='text-2xl font-bold p-7 max-sm:text-sm'>Top <b>10</b> Supporters</h1>
            <ul className='pb-20' >
              {payments.length == 0 && <li className=' ml-14 flex items-center mt-5'>NO PAYMENT YET</li>}
              {payments.map((p, i) => {
                return <li key={i} className="flex flex-col md:flex-row items-center mt-5 mx-2 md:ml-14">
                  <Image
                    src="image/profile.gif"
                    className=" rounded-full mb-2 md:mb-0 md:mr-2"
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div className="text-center md:text-left">
                    <span className="block md:inline">{p.name}</span>
                    &nbsp; Donate
                    <b className="text-lg block md:inline">
                      &nbsp; &#8377; {p.amount} &nbsp;
                    </b>
                    <span className="block md:inline">
                      with a message &quot;{p.message}&quot; ❤️
                    </span>
                  </div>
                </li>

              })}
            </ul>
          </div>
          <div className='w-1/2 h-[73vh] max-xl:h-[90vh] bg-slate-950 shadow-custom-dark shadow-white max-xl:w-full rounded-2xl'>
            <h1 className='text-2xl font-bold p-7 max-sm:text-sm'>Make a Payment</h1>
            <label htmlFor="name" className="block mb-2 max-sm:text-base font-medium text-xl ml-14 text-gray-900 dark:text-white">Name : </label>

            <div className='flex items-center mb-4 dark:bg-gray-700 ml-14 border-2 border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3'>
              <svg className="w-6 ml-3 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='bg-gray-50  text-gray-900 text-sm w-full block ps-2 ml-3 p-2.5 max-sm:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ' placeholder="Enter your Name" />
            </div>
            <label htmlFor="message" className="block mb-2 font-medium text-xl ml-14 max-sm:text-base text-gray-900 dark:text-white">Message : </label>

            <div className='flex items-center mb-4 dark:bg-gray-700 ml-14 border-2 border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3'>
              <svg className="w-5 h-4 ml-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" id='message' className='bg-gray-50  text-gray-900 text-sm w-full block ps-2 ml-3 p-2.5  dark:bg-gray-700 dark:border-gray-600  max-sm:p-1  dark:placeholder-gray-400 dark:text-white ' placeholder="Enter the Message" />
            </div>
            <label htmlFor="amount" className="block mb-2 max-sm:text-base font-medium text-xl ml-14 text-gray-900 dark:text-white">Money : </label>

            <div className='flex items-center dark:bg-gray-700 ml-14 border-2 border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 invert ml-3' viewBox="0 0 64 64" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                <path d="m37.278 14.519-21.203-2.45a4 4 0 0 0-4.433 3.514l-.763 6.606" style={{ fill: 'none', stroke: '#222a33', strokeWidth: '2px' }} />
                <path d="m15.001 20.404.322-2.782a1.867 1.867 0 0 1 2.069-1.641l2.976.344M53.202 19.117a4.001 4.001 0 0 0-4.609-3.28l-38.149 6.425a4.001 4.001 0 0 0-3.28 4.609l3.634 21.575a4 4 0 0 0 4.609 3.28l38.149-6.425a4.003 4.003 0 0 0 3.28-4.609l-3.634-21.575z" style={{ fill: 'none', stroke: '#222a33', strokeWidth: '2px' }} />
                <path d="m19.474 47.253-2.823.476a1.999 1.999 0 0 1-2.305-1.64l-.443-2.632m30.623-23.148 2.823-.475a1.998 1.998 0 0 1 2.305 1.64l.443 2.631m-38.365 6.462-.443-2.632a1.999 1.999 0 0 1 1.64-2.304l2.823-.476M52.268 36.996l.443 2.631a1.999 1.999 0 0 1-1.64 2.305l-2.823.475M33.221 29.788A2.334 2.334 0 1 0 32 33.781a2.336 2.336 0 0 1 2.69 1.914 2.336 2.336 0 0 1-3.911 2.079M31.225 29.177l-.311-1.841M33.086 40.226l-.311-1.841" style={{ fill: 'none', stroke: '#222a33', strokeWidth: '2px' }} />
              </svg>
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" id='amount' className='bg-gray-50  text-gray-900 text-sm w-full block ps-2 ml-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  max-sm:p-1  dark:text-white ' placeholder="Enter the Amount" />
            </div>

            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center ml-14 mt-11 w-2/3 me-2 mb-2 disabled:bg-slate-500 disabled:from-slate-950 disabled:cursor-not-allowed" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>

            <div className='flex justify-evenly w-2/3 mt-6 ml-14 max-sm:flex-col'>
              <button
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center   me-2 mb-2 disabled:bg-slate-500 disabled:from-slate-950 disabled:cursor-not-allowed"
                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}
                onClick={() => pay(1000)}
              >
                pay &#8377;10
              </button>
              <button
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center   me-2 mb-2 disabled:bg-slate-500 disabled:from-slate-950 disabled:cursor-not-allowed"
                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}
                onClick={() => pay(2000)}
              >
                pay &#8377;20
              </button>
              <button
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center  me-2 mb-2 disabled:bg-slate-500 disabled:from-slate-950 disabled:cursor-not-allowed"
                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}
                onClick={() => pay(3000)}
              >
                pay &#8377;30
              </button>
            </div>


          </div>
        </div>
      </div>


    </>
  )
}

export default PaymentPage
