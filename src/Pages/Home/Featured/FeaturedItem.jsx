import React from 'react';
import './FeaturedItem.css';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'

const FeaturedItem = () => {
    return (
        <div className='featured_item bg-fixed text-white pt-8 my-10'>
             <SectionTitle
            subHeading={'Check it out'}
            heading={'from our Menu'}
            ></SectionTitle>

            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <h1>March 20, 2023</h1>
                    <h1 className='uppercase'>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;