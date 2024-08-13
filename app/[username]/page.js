import PaymentPage from '@/components/PaymentPage'
import connectDB from '@/db/connectDb'
import { notFound } from 'next/navigation'
import React from 'react'
import User from '@/models/User'

const Username = async ({ params }) => {
  
  const checkUser = async () => {
    await connectDB();
    let u = await User.findOne({ username: params.username })
    if (!u) {
      return notFound()
    }
  }
  await checkUser();

  return (
    <>
      <PaymentPage username={params.username} />
  </>
  )
}

export default Username
export async function generateMetadata({ params }) {
  return {
    title: `Welcome ${params.username} - Complete Your Donation`,
    description: "Make a difference with your donation. Enter your payment details to support AthCare’s mission and help animals in need.",
}
};
