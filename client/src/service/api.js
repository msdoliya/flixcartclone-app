import axios from 'axios';

const URL =    'http://localhost:8000' || ""

export const  authenticatesignup =  async (data)=>{
   try {
    await axios.post(`${URL}/signup`, data)
    
   } catch (error) {
    console.log('error while signupapi', error)
   }
}

export const authenticatelogin =  async (data)=>{
   try {
    return await axios.post(`${URL}/login`, data)
    
   } catch (error) {
    console.log('error while loginapi', error)
    return error.response;
   }
}


