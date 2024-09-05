import React, { useContext } from "react";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const { baseUrl } = useContext(AuthContext);
  let total = cart.reduce((sum, item) => item.price + sum, 0);
  total = total.toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(item._id);
        fetch(`${baseUrl}/cart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full ">
      <Helmet>
        <title> MyCart || Bistro Boss </title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex  justify-evenly items-center ">
        <h3 className="text-3xl">Total Items: {cart.length} </h3>
        <h3 className="text-3xl">Total Price: ${total} </h3>
        <Link to={"/dashboard/payment"}>
          <button className="btn btn-warning btn-sm">Pay</button>
        </Link>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item);
                    }}
                    className="btn btn-ghost btn-lg bg-red-600"
                  >
                    {" "}
                    <FaTrashAlt />{" "}
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
