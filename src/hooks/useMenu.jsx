import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMenu = () => {
  const { baseUrl } = useContext(AuthContext);
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${baseUrl}/menu`)
      .then((res) => res.json())
      .then((data) => {
        // const popularItems = data.filter(item=>item.category==='popular')
        // setMenus(popularItems)
        setMenus(data);
        setLoading(false);
      });
  }, []);
  // console.log("In HooKMenus:",menus);

  return [menus, loading];
};

export default useMenu;
