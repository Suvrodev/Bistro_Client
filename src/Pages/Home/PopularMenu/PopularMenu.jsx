import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItemCard from "../../Share/MenuItemCard/MenuItemCard";

const PopularMenu = () => {
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setMenus(data))
    },[])

    // console.log(menus);
    const popular=menus.filter(pm=>pm.category==="popular")
    console.log(popular);
  return (
        <div>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular items"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 p-3 m-2'>
                {
                    popular.map(item=> <MenuItemCard
                    key={item._id}
                    item={item}
                    ></MenuItemCard> )
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </div>
  );
};

export default PopularMenu;
