import React, { useEffect, useState } from 'react';

const Secret = () => {

    const [we,setWe]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/we',{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('bistro')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setWe(data))
    },[])
    console.log(we);
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