import React from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { CiLock } from "react-icons/ci";
import {useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { Link } from 'react-router-dom'
import { auth , db } from './firebase'
import { doc, setDoc } from 'firebase/firestore'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [signUp, setSignUp] = useState(false);
    const [formInput,setFormInput] = useState({fname:'',lname:'', email:'',password:''})
    const [error,setError] = useState({fname:'',lname:'', email:'',password:''});
    
    const validation = () =>{
      let formError = {};
      if(!formInput.fname.length)
        {
           formError.fname = 'Enter first name'
        }
        if(!formInput.lname.length )
          {
             formError.lname = 'Enter last name'
          }
      if(!formInput.email)
        {
          formError.email = 'Email is required'
        }
        else{
          const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const  tr = regExp.test(formInput.email);
          if(!tr){formError.email = 'Invalid Email'}
        }

        if(!formInput.password.length)
          {
            formError.password = 'Enter password'
          }
          else if(formInput.password.length <8)
            {
              formError.password = 'Enter strong password'
            }
        setError(formError)
        

    }

    const signInSignUpHandler = () => {
        setSignUp(!signUp)
    }

    const handleInputChange = (e)=>{
        const { name, value } = e.target;

        console.log(name,value)
        setFormInput({...formInput,[name]:value})

    }
    const onSubmit =  async (e) =>{
      // e.preventDefault();
      validation();
      console.log(formInput)
        if(signUp){
            try{
                await createUserWithEmailAndPassword(auth,formInput.email, formInput.password)
                const user = auth.currentUser;
                if(user){
                  await setDoc(doc(db,'Users',user.uid),{
                    uid: user.uid,
                    email:user.email,
                    first_name:formInput.fname,
                    last_name:formInput.lname
                  })
                  console.log("Data stored")
                }
                toast.success(" User Registered successfully",{
                 position : 'top-center' })
                setSignUp(false)
             }
             catch(error){
                //  toast.error(error.message,{
                //   position : 'top-center' })
             }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth,formInput.email,formInput.password)
                toast.success("Login successfully",{
                  position : 'top-center' })
                navigate('/dashboard')
            } catch (error) {
              // toast.error(error.message,{
              //   position : 'top-center' })
            }
        }
    }

  return (
    <div className='login-body w-full flex justify-center items-center'>
      <form className='lg:w-1/3  mt-[-80px] h-1/1.1 p-4 flex flex-col gap-4 sm:w-full md:w-1/2 '>
      <div className='grid place-items-center text-4xl'> <span style={{background : signUp? '#9C27B0' : 'green'}} className='clock'> <CiLock /> </span></div>
     <h1>{signUp? 'Sign Up' : 'Sign In'}</h1>
     { signUp && <><TextField
          id="outlined-password-input"  
          label="First Name"
          type="text"
          name='fname'
          onChange={handleInputChange}
        />
        {error.fname && <div className='text-red-600' >{error.fname}</div>}
        <TextField
          id="outlined-password-input"  
          label="Last Name"
          type="text"
          name='lname'
          onChange={handleInputChange}
        />
        {error.lname && <div className='text-red-600' >{error.lname}</div>}</>}  
    <TextField
          required
          id="outlined-email-required"
          label="Enter your Email"
          defaultValue=""
          type='email'
          name = 'email'
          onChange={handleInputChange}
        />
        {error.email && <div className='text-red-600' >{error.email}</div>}
        <TextField
          id="outlined-password-input"  
          label="Password"
          type="password"
          name='password'
          onChange={handleInputChange}
          autoComplete="current-password"
        />
        {error.password && <div className='text-red-600'>{error.password}</div>}
        <div><Checkbox {...label}  size="large" /><span>Remember me</span></div>
        <Button variant="contained" onClick={()=>{onSubmit(signUp)}}  >{signUp? 'Sign Up' : 'Sign In'}</Button>
        <div className='flex justify-between'>
        <Link  to='/forgot' ><button className='text-blue-700 hover:underline md:text-xs flex space-between xl:text-[16px]' variant="text">Forgot password</button></Link>
        <button onClick={()=>{signInSignUpHandler()}} className='text-blue-700 sm:text-[6px] xl:text-[16px] pl-20 hover:underline md:text-xs ' variant="text">Do {!signUp? 'not' : ''} have an account? {!signUp? 'Sign Up' : 'Sign In'} </button>
        </div>
      </form>
    </div>
  )
}

export default Login
