import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDocs,getDoc,updateDoc, collection,query,where  } from "firebase/firestore";
import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUphandler, getUser,documentUpdate } from '../../Constant/Functions';
import "./Login.css";
import { auth, db, } from "./firebase";

const Login = () => {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [signUp, setSignUp] = useState(false);
  const [formInput, setFormInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [loginAttempts, setLoginAttempts] = useState(0);

  const validation = () => {
    let formError = {};
    if (!formInput.fname.length) {
      formError.fname = "Enter first name";
      console.log('formInput.fname.length-->',formInput.fname.length)
    }
    if (!formInput.lname.length) {
      formError.lname = "Enter last name";
    }
    if (!formInput.email) {
      formError.email = "Email is required";
    } else {
      const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const tr = regExp.test(formInput.email);
      if (!tr) {
        formError.email = "Invalid Email";
      }
    }

    if (!formInput.password.length) {
      formError.password = "Enter password";
    } else if (formInput.password.length < 8) {
      formError.password = "Enter strong password";
    }
    setError(formError);
  };

  const signInSignUpHandler = () => {
    setSignUp(!signUp);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  const onSubmit = async (e) => {
    // e.preventDefault();
    validation();
    if (signUp) {
      try {
       await signUphandler(auth, formInput.email,formInput.password,setDoc,doc,db,formInput.fname,formInput.lname)
        setSignUp(false);
      } catch (error) {
        //  toast.error(error.message,{
        //   position : 'top-center' })
      }
    } else {
    const remainingAttempt =  await getUser(db , getDocs, collection, formInput.email)
    if(remainingAttempt <= 0)
      {
        navigate('/access-denied')
        return;
      }
    console.log('remainingAttempt->',remainingAttempt)
      try {
        await signInWithEmailAndPassword(
          auth,
          formInput.email,
          formInput.password
        );
        toast.success("Login successfully", {
          position: "top-center",
          autoClose:2000,
        });
        navigate("/dashboard");
      } catch (error) {
        console.log("login error",error.message)
        if(error.code === 'auth/invalid-credential')
          try {
            
            const usersCollectionRef = collection(db, 'Users');
            const q = query(usersCollectionRef, where('email', '==', formInput.email));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
              querySnapshot.forEach(async (doc) => {
                const currentCount = doc.data().login_count;
                const updatedCount = currentCount - 1;
                await updateDoc(doc.ref, { login_count: updatedCount });
        
                console.log(`Login count updated for ${formInput.email}. New count: ${updatedCount}`);
              });
            } else {
              console.log(`No user found with email ${formInput.email}`);
            }
            
            setLoginAttempts(loginAttempts + 1);
            toast.error(`${2 - loginAttempts} attempts left`, {
              position: "top-center",
              autoClose: 2000,
            });
            if (loginAttempts >= 2) {
              navigate("/access-denied");
            }
          } catch (error) {
            console.error("Error updating login count:", error);
          }
      }
    }
  };

  return (
    <>
      <div className="login-body w-full flex justify-center items-center">
          <form className="lg:w-full  mt-[-80px] h-1/1.1 p-4 flex flex-col gap-4 sm:w-full md:w-full ">
            <div className="grid place-items-center text-4xl">
              {" "}
              <span
                style={{ background: signUp ? "#9C27B0" : "green" }}
                className="clock"
              >
                {" "}
                <CiLock />{" "}
              </span>
            </div>
            <h1>{signUp ? "Sign Up" : "Sign In"}</h1>
            {signUp && (
              <>
                <TextField
                required
                  id="outlined-password-input"
                  label="First Name"
                  type="text"
                  name="fname"
                  onChange={handleInputChange}
                />
                {error.fname && (
                  <div className="text-red-600">{error.fname}</div>
                )}
                <TextField
                required
                  id="outlined-password-input"
                  label="Last Name"
                  type="text"
                  name="lname"
                  onChange={handleInputChange}
                />
                {error.lname && (
                  <div className="text-red-600">{error.lname}</div>
                )}
              </>
            )}
            <TextField
              required
              id="outlined-email-required"
              label="Enter your Email"
              defaultValue=""
              type="email"
              name="email"
              onChange={handleInputChange}
            />
            {error.email && <div className="text-red-600">{error.email}</div>}
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              onChange={handleInputChange}
              autoComplete="current-password"
            />
            {error.password && (
              <div className="text-red-600">{error.password}</div>
            )}
            <div>
              <Checkbox {...label} size="large" />
              <span>Remember me</span>
            </div>
            <Button
              variant="contained"
              onClick={() => {
                onSubmit(signUp);
              }}
            >
              {signUp ? "Sign Up" : "Sign In"}
            </Button>
            <div className="flex justify-between">
              <Link to="/forgot">
                <button
                  className="text-blue-700 hover:underline md:text-xs flex space-between xl:text-[16px]"
                  variant="text"
                >
                  Forgot password
                </button>
              </Link>
              <button
                onClick={() => {
                  signInSignUpHandler();
                }}
                className="text-blue-700 sm:text-[6px] xl:text-[16px] pl-20 hover:underline md:text-xs "
                variant="text"
              >
                Do {!signUp ? "not" : ""} have an account?{" "}
                {!signUp ? "Sign Up" : "Sign In"}{" "}
              </button>
            </div>
          </form>
        </div>
    </>
  );
};

export default Login;
