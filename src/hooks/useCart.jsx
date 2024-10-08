import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("bistro");
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    // queryKey: ['cart',user?.email],
    // queryFn: async ()=>{
    //     const res=await fetch(`http://localhost:5000/cart?email=${user?.email}`,{
    //         headers: {authorization: `bearer ${token}`}
    //     })
    //     return res.json()
    // },
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/cart?email=${user?.email}`);
      console.log("res from axios: ", res);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
