import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect('mongodb+srv://ecommerceapp:12345@cluster0.vxhfaqq.mongodb.net/ecommerce');
    const conn = await mongoose.connect("mongodb://0.0.0.0/TodoApp");
    console.log(`Connected to mongoDB ${conn.connection.host.bgMagenta.red}`);
  } catch (error) {
    console.log(`Error in mongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
