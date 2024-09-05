import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading, baseUrl } = useContext(AuthContext);
  const token = localStorage.getItem("bistro");

  // console.log("Check Def from Hook");
  // const [isAdmin,setIsAdmin]=useState("")

  // useEffect(()=>{
  //   axios.get(`http://localhost:5000/user/${user?.email}`,{
  //     headers:{authorization:`bearer ${token}`}
  // })
  //   .then(res=>{
  //     setIsAdmin(res.data.admin);
  //   })
  // },[])

  // return [isAdmin,loading]

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/user/${user?.email}`, {
        headers: { authorization: `bearer ${token}` },
      });
      // console.log("----------",res.json());
      return res.json();
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
