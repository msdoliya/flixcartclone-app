import React, { useContext, useState } from 'react'
import './login.css'
import{RxCross1} from 'react-icons/rx'
import { authenticatesignup, authenticatelogin } from '../../service/api'
import { Accountcontext } from '../context/Accountprovider'

const Logindialog = ({setopen, open}) => {



     const signupinitialvalue = {
         firstname: '',
         lastname: '',
         username: '',
         email: '',
         password: '',
         phone: '',

     }
     
     const logininitialvalue = {
      email: '',
      password: '',
  }


    const [loginsinup, setloginsignup] = useState(true);
    const [signupcredential, setsignupcredential] = useState(signupinitialvalue)
    const [logincredential, setlogincredential] = useState( logininitialvalue)
      const {setname,setloged} = useContext(Accountcontext)
  const [incorrect, setincorrect] = useState(false)
   const signuphandle =(e)=>{
      setsignupcredential({...signupcredential,[e.target.name]: e.target.value})
      console.log(signupcredential)
    }


    const loginonchangephandle =(e)=>{
      setlogincredential({...logincredential,[e.target.name]: e.target.value})
      
   
    }

    const signup = async ()=>{
    const responce = await authenticatesignup(signupcredential)
    console.log(responce.status)
   if(responce.status === 200){
    alert('your account alredy created plese enter emailand password for login')
    setloginsignup(true)
   }
  
  }

    const login = async ()=>{
         const response =  await   authenticatelogin(logincredential)
         if(response.status === 200){
            setopen(false)
            setname(response.data.firstname)
            setloged(true)
         }
    else{
      setincorrect(true)
    }
       
        }

  return (
    <div className='loginbox'>
     
    <div className='overlays' onClick={()=>{setopen(false)}}>
  
    </div>
    <div className='loginmodal'>
    <RxCross1 className='crossicon' onClick={()=>{setopen(false)}}/>
      <div className="logn">
      {loginsinup?
    <div className="left">
     <span><h1 className='heading'>Login</h1></span>
     <h2 className='paragraph'>
        Get access to your Orders, Wishlist and Recommendations
     </h2>
    </div>
    :
    <div className="left">
    <span><h1 className='heading'>Looks like you're new here!</h1></span>
    <h2 className='paragraph'>
       sign up with your mobile number to get started 
    </h2>
   </div>
      }
    <div className="right">
  {  loginsinup?
    <>
       <input  onChange={loginonchangephandle} name = 'email' placeholder='Enter Email address' className='logininput' type="text" /> 
      <hr className='hrline' />
      <input onChange={loginonchangephandle} name= 'password' placeholder='Enter password' className='logininput' type="password" /> 
      <hr className='hrline' />
       {incorrect &&  <p className='incorrect'>please enter correct email and password</p>}
      <p className='tnc'>by continuing, you are agree to flipkart's termes of use and privacy policy</p>
       <button onClick={login} className='loginbtn'> Login</button>
       <p  onClick={()=>{setloginsignup(false)}} className='newacc'> Create a New Account</p>
       </>
       :
       <>
       <input onChange={signuphandle} name ='firstname' placeholder='Enter Firstname' className='logininput' type="text" /> 
      <hr className='hrline' />
      <input  onChange={signuphandle} name ='lastname'  placeholder='Enter lastname' className='logininput' type="text" /> 
      <hr className='hrline' />
      <input  onChange={signuphandle} name ='username'   placeholder='Enter username' className='logininput' type="text" /> 
      <hr className='hrline' />
      <input  onChange={signuphandle} name ='email'  placeholder='Enter Email' className='logininput' type="text" /> 
      <hr className='hrline' />
      <input  onChange={signuphandle}  name ='password'  placeholder='Enter passward' className='logininput' type="password" /> 
      <hr className='hrline' />
      <input  onChange={signuphandle} name ='phone'  placeholder='Enter phone' className='logininput' type="text" /> 
      <hr className='hrline' />
      
      
       <button style={{cursor:'pointer'}} onClick={signup} className='loginbtn'> signup</button>
       <p onClick={()=>{setloginsignup(true)}} className='newacc'> Already have an account?</p>
       </>
    }
    </div>
    </div>
    </div>
   
    </div>
  )
}

export default Logindialog
