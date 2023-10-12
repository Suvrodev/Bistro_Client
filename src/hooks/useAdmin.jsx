import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = (def) => {
    const {user,loading}=useContext(AuthContext)
    console.log("Chek Def from Hook",def);

     ////Check Admin or not start
     const Mail=user?.email
     console.log("Hook Mail: ",Mail);
     const [checkUser,setCheckUser]=useState("")
     useEffect(()=>{
       if(!loading){
            fetch(`http://localhost:5000/check/${Mail}`)
            .then(res=>res.json())
            .then(data=>{
                console.log("Come");
                setCheckUser(data)
            })
       }
     },[def])
     console.log("Check User(Hook): ",checkUser);
     let isAdmin;
     if(checkUser?.role=='admin'){
       isAdmin=true
     }else{
       isAdmin=false
     }
    ////Check Admin or not End
    return [isAdmin,loading]
};

export default useAdmin;