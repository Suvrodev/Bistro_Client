import React, { useEffect, useState } from 'react';

import image1 from '../../../src/assets/home/01.jpg'

const MouceScroll = () => {
    const [value,setValue]=useState(0)


     // Function to handle the scroll event
    const handleScroll = (event) => {
        // Increment or decrement the value based on scroll direction
        if (event.deltaY > 0) {
        // Scrolling down
        setValue(value + 1);
        } else {
        // Scrolling up
        setValue(value - 1);
        }
    };

    // Attach an event listener for scroll events
    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        // Clean up the event listener when the component unmounts
        // return () => {
        // window.removeEventListener('wheel', handleScroll);
        // };
    }, [value]); // Dependency array is important to prevent unnecessary re-renders


    return (
        <div className='overflow-auto'>
           <div className='mt-20 overflow-auto'>
                 <h1 className='bg-green-600 p-5 rounded-md w-4/12 text-center font-bold text-2xl mx-auto my-10'>Mouce Scroll: {value} </h1>
           </div>

        </div>
    );
};

export default MouceScroll;