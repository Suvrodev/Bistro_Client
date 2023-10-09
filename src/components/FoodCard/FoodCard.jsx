import React from 'react';

const FoodCard = ({item}) => {
    const {_id,image,recipe,name,price}=item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'> ${price} </p>
            <div className="card-body flex flex-col items-center">
                <h2 className="text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCard(item)} className="btn btn-outline border-0 border-b-4 mt-4
                    border-orange-400 bg-slate-100 text-black">Add to Cart</button>
                </div>
            </div>
      </div>
    );
};

export default FoodCard;