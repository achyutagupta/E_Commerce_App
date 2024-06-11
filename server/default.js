import { products } from "./constants/data.js";
import Product from "./models/product-schema.js";

const Defaultdata = async () =>{
    try {
        await Product.insertMany(products);
        console.log('Data imported successfully');
    } catch (error) {
        console.log(`error while inserting default data` , error.message);
    }
}

export default Defaultdata;