import React from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { CiLock } from "react-icons/ci";
import {useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth'
import {Link } from 'react-router-dom'
import {auth } from '../Login/firebase.js'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useFormik } from 'formik'
  import { YupSchema } from './YupSchema.jsx';


const Login = () => {
    const navigate = useNavigate();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [signUp, setSignUp] = useState(false);
    
   const forgetButtonHandler = ()=>{
    sendPasswordResetEmail(auth, values.email)
    try {
        toast.success('Email reset link is send to your registered email',{
            position:'top-center'
        })
    } catch (error) {
        
    }
   }

    const signInSignUpHandler = () => {
        setSignUp(!signUp)
    }
    const onSubmit =  async (e) =>{
      // e.preventDefault();
        if(signUp){
            try{
                console.log("before")
                await createUserWithEmailAndPassword(auth,values.email,values.password)
                console.log("before")
                const user = auth.currentUser;
                toast.success(" User Registered successfully",{
                 position : 'top-center' })
                setSignUp(false)
             }
             catch(error){
                 toast.error("SignUp failed",{
                  position : 'top-center' })
             }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth,values.email,values.password)
                toast.success("Login successfully",{
                  position : 'top-center' })
                navigate('/dashboard')
            } catch (error) {
              toast.error('Login failed',{
                position : 'top-center' })
            }
        }
    }
    const initialValue = {
        email:'',
        password:''
    }
   const {values, errors ,handleChange, touched, handleBlur, handleSubmit} = useFormik({
        initialValues : initialValue,
        validationSchema : YupSchema  ,
        onSubmit : onSubmit
    })

    console.log('errors',touched);

  return (
    <div className='login-body w-full flex justify-center items-center'>
      <form className='lg:w-1/3  mt-[-80px] h-1/1.1 p-4 flex flex-col gap-4 sm:w-full md:w-1/2 ' onSubmit={handleSubmit} >
      <div className='grid place-items-center text-4xl'> <span style={{background : signUp? '#9C27B0' : 'green'}} className='clock'> <CiLock /> </span></div>
     <h1>{signUp? 'Sign Up' : 'Sign In'}</h1>
    <TextField
          required
          id="outlined-email-required"
          label="Enter your Email"
          defaultValue=""
          type='email'
          name = 'email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
       {errors.email && touched? <div className='text-red-600'>{errors.email}</div> : ''}
        <TextField
          id="outlined-password-input"  
          label="Password"
          type="password"
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="current-password"
        />
        {errors.password && touched ? <div className='text-red-600'>{errors.password}</div> : ''}
        <div><Checkbox {...label}  size="large" /><span>Remember me</span></div>
        <Button variant="contained" type='submit'>{signUp? 'Sign Up' : 'Sign In'}</Button>
        <div className='flex justify-between'>
        <Link to='/forgot'><button className='text-blue-700 hover:underline md:text-xs flex space-between' variant="text">Forgot password</button></Link>
        <button onClick={()=>{signInSignUpHandler()}} className='text-blue-700 pl-20 hover:underline md:text-xs sm:text-[6px]' variant="text">Do not have an account? {!signUp? 'Sign Up' : 'Sign In'} </button>
        </div>
      </form>
    </div>
  )
}

export default Login
