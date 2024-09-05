import React from "react";
import MenuItemCard from "../../Share/MenuItemCard/MenuItemCard";
import Cover from "../../Share/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="pt-8 mb-10">
      {title && (
        <Cover
          img={coverImg}
          title={title}
          body={"Would you like to Try a Dish"}
        ></Cover>
      )}

      <div className="grid md:grid-cols-2 gap-10 p-3 my-16">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
