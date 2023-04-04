import signupmodal from "../../modal/signupschema.js"



 export const signupuser = async(req, res) =>{
 try {
     const signupdata = req.body
      const newuser = new signupmodal(signupdata)
       await newuser.save();
 } catch (error) {
    console.log('error while handling signupapi', error)
 }

}


export const loginuser = async(req, res) =>{
   try {
       const logindata = req.body
        const exist =  await signupmodal.findOne({email: logindata.email, password: logindata.password})
         if(exist){
          return  res.status(200).json(exist)
         }
         else{
            return res.status(401).json({message: 'invalid login'})
         }
   } catch (error) {
      res.status(500).json('error', error.message)
      console.log('error while handling logiapi', error)
   }
  
  }