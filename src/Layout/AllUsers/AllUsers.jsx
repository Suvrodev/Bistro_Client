import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const token = localStorage.getItem("bistro");
const AllUsers = () => {
  const { user, successfullToast, Logout_, baseUrl } = useContext(AuthContext);
  const [users, refetch] = useUsers(10);

  const handleDelete = (_id) => {
    axios
      .delete(`${baseUrl}/user/${_id}`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          successfullToast("Deleted User Successfully");
        }
      });
  };

  const handleMakeAdmin = (user) => {
    user.role = "admin";
    console.log("Now user: ", user);
    axios
      .patch(`${baseUrl}/user/${user._id}`, user, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch("xy");
          successfullToast("Convert to admin");
        }
      });
    // fetch(`http://localhost:5000/user/${user._id}`,{
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log('after modify, data:',data)
    //     refetch();
    //     if(data.modifiedCount>0){
    //       successfullToast("Convert to admin")

    //     }
    // })
  };

  return (
    <div className="w-full">
      <Helmet>
        <title> All Users || Bistro Boss </title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total users: {users.length}{" "}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {" "}
                  {user.role == "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeAdmin(user);
                      }}
                      className="btn btn-ghost btn-lg bg-orange-600"
                    >
                      {" "}
                      <FaUserShield />{" "}
                    </button>
                  )}{" "}
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                    className="btn btn-ghost btn-lg bg-red-600"
                  >
                    {" "}
                    <FaTrashAlt />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
