import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='w-11/12 md:w-3/12 mx-auto text-center my-8'>
            <p className='text-yellow-500 mb-4'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4 mb-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;