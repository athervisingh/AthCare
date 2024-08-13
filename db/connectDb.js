import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
      useNewUrlParser: true,
       useUnifiedTopology: true, 
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
export default connectDB;