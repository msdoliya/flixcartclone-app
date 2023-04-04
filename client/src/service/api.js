import axios from 'axios';

const URL = ''

export const  authenticatesignup =  async (data)=>{
   try {
    await axios.post(`${URL}/signup`, data)
    
   } catch (error) {
    console.log('error while signupapi', error)
   }
}

export const authenticatelogin =  async (data)=>{
   try {
    return await axios.post(`${url}/login`, data)
    
   } catch (error) {
    console.log('error while loginapi', error)
    return error.response;
   }
}


