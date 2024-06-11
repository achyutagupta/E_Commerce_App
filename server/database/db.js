import mongoose from "mongoose";

export const Connection = async (URL) =>{
   
    try {
       await mongoose.connect(URL);
       console.log('Database Connection Successfull');
    } catch (error) {
        console.log(`Error while connecting to database` , error.message);
    }
}

export default Connection ; 