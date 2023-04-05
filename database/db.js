 import mongoose from "mongoose";
 
 
 const connection = async(url) =>{

    try {
      await  mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true})
        console.log('database connected successs')
    } catch (error) {
       console.log('eror while connevcting with the server  ' , error.message) 
    }
}


export default connection;