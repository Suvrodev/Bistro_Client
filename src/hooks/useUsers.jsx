import { useQuery } from "@tanstack/react-query";

const useUsers = (number) => {

    const token=localStorage.getItem('bistro')
    
    const { data:users=[],refetch}=useQuery({
        queryKey: [`users,user,${number}`],
        queryFn: async()=>{
            // const res=await fetch('http://localhost:5000/user',{headers: {authorization: `bearer ${token}`}})
            const res=await fetch('http://localhost:5000/user',{headers: {authorization: `bearer ${token}` } })
            return res.json()
        }
    })

   

    return [users,refetch]
};

export default useUsers;