import React from 'react';
import './ForgotPassword.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {sendPasswordResetEmail} from 'firebase/auth'
import {getAuth} from 'firebase/auth'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoIosArrowBack } from "react-icons/io";
import {Link} from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const ForgotPassword = () => {
    const [showInputBox, setShowInputBox] = useState(true)

    const auth = getAuth();
  
    const intialValue = {
        email : ''
    }

   const schema = Yup.object({
        email:Yup.string().min(2).max(25).required('Enter your email first')
    })
   
   const onSubmitHandler = async(e)=>{
    console.log(values.email)
   await sendPasswordResetEmail(auth, values.email)
    try {
        setShowInputBox(false)
        toast.success('Email reset link is send to your registered email',{
            position:'top-center'
        })
        
    } catch (error) {
        console.log("forgot error ",error   )
        toast.error('Failed try again',{
            position:'top-center'
        }) 
    }
   }
   const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues :  intialValue,
        validationSchema:schema,
        onSubmit : onSubmitHandler
    })
     

  return (
    <div className='forgot-password-container'>
        <div className='w-[90%] h-[8vh] p-4 forgot-pass'>Forgot Password</div>
        <form className='form-cont' onSubmit={handleSubmit}>
           {showInputBox &&  <div className='text'>Enter your email and we will send you a email to reset you password</div>}
      {
       showInputBox ? <TextField
          required
          className='w-full '
          id="outlined-email-required"
          label="Enter your Email"
          type='email'
          name = 'email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        /> : <div className='instruction'>We have send the password reset mail at your {values.email}. Please check your inbox.</div>
      }
      
      
       {errors.email && <div className='text-red-600'>{errors.email}</div>}
       {showInputBox && <Button className='w-full ' variant="contained" type='submit'  >Send link</Button>}
       <Link to='/'> <div className='back-login font-bold'><IoIosArrowBack />back to login </div></Link>
        </form>
    </div>
  )
}

export default ForgotPassword

