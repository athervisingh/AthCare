"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import User from "@/models/User";
import connectDB from "@/db/connectDb";


export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SEC,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };



  let x = await instance.orders.create(options);
  
  await Payment.create({
    oid: x.id,
    amount: amount/100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};



export const fetchuser = async (username) => {
  await connectDB()
  let u = await User.findOne({ username: username })
  let user = u.toObject({ flattenObjectIds: true })
  return user
}




export const fetchpayments = async (username) => {
  await connectDB()
  let p = await Payment.find({ to_user: username,done:true }).sort({ amount: -1 }).limit(10).lean()
  return p;
}


export const updateProfile = async (data, oldusername) => {
  try {
    await connectDB();
    
    let ndata = Object.fromEntries(data);

    
    // Check if the username is being updated and if the new username already exists
    if (oldusername !== ndata.username) {
      let userExists = await User.findOne({ username: ndata.username });
      if (userExists) {
        return { error: "Username Already Exists" };
      }
    }
    
    // Attempt to update the user document based on email
    const result = await User.updateOne({ email: ndata.email }, ndata);
    await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username });
    
    // Check if the update was successful
    if (result.nModified === 0) {
      return { error: "No document found to update or no changes were made" };
    }

    return { success: "Profile updated successfully" };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { error: "An error occurred while updating the profile" };
  }
};