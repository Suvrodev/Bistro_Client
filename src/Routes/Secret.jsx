import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Secret = () => {

    const token=localStorage.getItem('bistro')

    const [we,setWe]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/we',{
            headers:{authorization:`bearer ${token}`}
        })
        .then(res=>setWe(res.data))
    },[])
    console.log(we);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/we',{
    //         headers:{authorization: `bearer ${token}`}
    //     })
    //     .then(res=>res.json())
    //     .then(data=>setWe(data))
    // },[])
    // console.log("We: ",we);

    return (
       <div className='overflow-auto'>
         <div className='mt-[150px]'>
            <div className='grid grid-cols-4 gap-5'>
                {
                    we.map((w,idx)=> <p key={idx}>{w.Name}</p> )
                }
            </div>
          </div>
       </div>
    );
};

export default Secret;