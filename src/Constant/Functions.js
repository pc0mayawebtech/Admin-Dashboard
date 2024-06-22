import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify'
import { getDoc,updateDoc,query,where } from "firebase/firestore";

export const signUphandler =  async( auth , email, password, setDoc, doc, db, fname, lname ) => {
        await createUserWithEmailAndPassword( auth, email, password );
        try {
          const user = auth.currentUser;
        if (user) {
           await storeUser(user,setDoc,doc,db,fname,lname)
            console.log("Data stored");
        }
        toast.success(" User Registered successfully", {
          position: "top-center",
          autoClose:1000,
        });
        } catch (error) {
          console.log(error)
        }
     
}


const storeUser = async(user,setDoc,doc,db,fname,lname) =>{
    await setDoc(doc(db, "Users", user.uid), {
        uid: user.uid,
        email: user.email,
        first_name: fname,
        last_name: lname,
        login_count : 3,
      });
      console.log("Data stored");
    }


   export const getUser = async(db, getDocs,collection,searchEmail)=>{
     const response = await getDocs(collection(db, 'Users'));
      let count = 4;
     response.forEach((doc)=>{
  
         if(doc.data().email == searchEmail)
          { 
            console.log("doc.data().email",doc.data(),doc.data().login_count)
            count = doc.data().login_count;
            
          }
     })

       return count;
     
    }

  export const documentUpdate = (db) =>{
    }



export const signInHandler =  async( auth , email, password ) => {
    

    try {
          await signInWithEmailAndPassword(auth,email,password, );
          toast.success("Login successfully", {
            position: "top-center",
          });
          
        } catch (error) {
        //   setAccessDenied(accessDenied + 1);
        //   toast.error(`${2 - accessDenied} attemp left`, {
        //     position: "top-center",
        //   });
        }
      
     
     
}





