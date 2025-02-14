import mongoose from "mongoose";


export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        //console.log(`MongoDB Connected: ${conn.connection.host} and hello to you too`);
    } catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1); //process exits with a failure code, 0 means success
    }
}