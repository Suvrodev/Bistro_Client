import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus,setMenus]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            // const popularItems = data.filter(item=>item.category==='popular')
            // setMenus(popularItems)
            setMenus(data)
            setLoading(false)
            
        })
    },[])
    // console.log("In HooKMenus:",menus);

    return [menus,loading]
};

export default useMenu;