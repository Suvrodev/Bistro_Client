import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const {user,successfullToast,unSuccessfullToast}=useContext(AuthContext)
    const {_id,image,recipe,name,price}=item
    const navigate=useNavigate()
    const location=useLocation()


    const handleAddToCard=(item)=>{
        
        if(user){
            const orderItem={foodId:_id,name,image,price,userEmail:user?.email}
            fetch('http://localhost:5000/cart',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(orderItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    successfullToast('Food add to cart')
                }
            })
        }else{
            unSuccessfullToast("Login First")
            navigate('/login',{state: {from:location}})
        }
    }

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