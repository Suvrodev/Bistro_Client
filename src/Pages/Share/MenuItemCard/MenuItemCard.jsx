import React from 'react';

const MenuItemCard = ({item}) => {
    const {_id,image,recipe,name,price}=item
    // console.log(item);
    return (
        <div className='flex space-x-2'>
        <img style={{borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
         <div>
           <h3 className='uppercase'>{name}------</h3>
           <p>{recipe}</p>
         </div>
         <p className='text-yellow-400 mb-2'>${price}</p>
     </div>
    );
};

export default MenuItemCard;