
import { products } from "./constant/data.js"
import product from "./modal/productschema.js"


const  defaultData =  async() =>{
try {

   await product.insertMany(products);
    console.log('data inserted successfully')
} catch (error) {
    console.log('error while inserting default data', error.message)
}
}

export default defaultData;







