import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import Swal from 'sweetalert2';
import axios from 'axios';


export const AuthContext=createContext("")
const AuthProvider = ({children}) => {

    const [user,setUser]=useState("")
    const [loading,setLoading]=useState(true)

    const auth = getAuth(app);
    const googleProvider= new GoogleAuthProvider();

    // Sign in By Google Start
    const signInByGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    // Sign in By Google End

    // /Register by Email and password start
    const registerByEmailPassword=(email,passowrd)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,passowrd)
    }
    // /Register by Email and password end

    // /Login By Email And Password Start
    const loginByEmailPassword=(email,passowrd)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,passowrd)
    }
    // /Login By Email And Password End


    ///Sign Out Start
    const Logout_=()=>[
        signOut(auth)
        .then(()=>{
            console.log("SignOut Successfully");
            localStorage.removeItem('bistro')
        })
        .then(error=>{
            // console.log("SignOut Error: ",error.message);
        }) 
    ]
    ///Sign Out End


     // Check User start
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log("Current User: ",currentUser);
            // setLoading(false)
            setUser(currentUser)

            // ///JWT Start
            // if(currentUser){
            //     const jwtUser={email: currentUser?.email}
            //     fetch(`http://localhost:5000/jwt`,{
            //         method: 'POST',
            //         headers:{
            //             'content-type': 'application/json'
            //         },
            //         body: JSON.stringify(jwtUser)
            //     })
            //     .then(res=>res.json())
            //     .then(data=>{
            //         localStorage.setItem('bistro',data.token)
            //     })
            // }

            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(res=>{
                    // console.log("My Token: ",res.data.token);
                    localStorage.setItem('bistro',res.data.token)
                    setLoading(false)
                })
            }else{
                localStorage.removeItem('bistro')
            }

            // ///JWT End
        })
        return ()=> unSubscribe()
    },[])
    // Check User End



     ///SuccessFully Toast Start
     const successfullToast=(write)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: write,
            showConfirmButton: false,
            timer: 1500
          })
    }

    ///UnSuccessfull Toast Start
    const unSuccessfullToast=(write)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: write,
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }



    const authInfo={
        user,
        signInByGoogle,
        registerByEmailPassword,
        loginByEmailPassword,
        Logout_,
        successfullToast,
        unSuccessfullToast,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;