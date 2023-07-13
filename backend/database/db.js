import mongoose from "mongoose";

export const Connection = async (username , password) =>{
    const URL = `mongodb://${username}:${password}@ac-inw0cbm-shard-00-00.mbbxyox.mongodb.net:27017,ac-inw0cbm-shard-00-01.mbbxyox.mongodb.net:27017,ac-inw0cbm-shard-00-02.mbbxyox.mongodb.net:27017/FLIPKART?ssl=true&replicaSet=atlas-owp6c8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL);
       console.log('Database Connection Successfull');
    } catch (error) {
        console.log(`Error while connecting to database` , error.message);
    }
}

export default Connection ; 