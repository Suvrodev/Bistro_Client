import React from "react";
import Cover from "../../Share/Cover/Cover";

import menuImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import useTitle from "../../../hooks/useTitle";

const Menu = () => {
  useTitle("Our Menu");
  const [menus] = useMenu();
  //console.log("Copa Samsu:",menus);
  const popular = menus.filter((item) => item.category === "popular");
  const desserts = menus.filter((item) => item.category === "dessert");
  const salad = menus.filter((item) => item.category === "salad");
  const drinks = menus.filter((item) => item.category === "drinks");
  const pizza = menus.filter((item) => item.category === "pizza");
  const soup = menus.filter((item) => item.category === "soup");
  const offered = menus.filter((item) => item.category === "offered");
  // console.log(popular);
  // console.log(desserts);
  // console.log(salad);
  // console.log(drinks);
  // console.log(pizza);
  // console.log(soup);
  // console.log(offered);
  return (
    <div>
      {/* Main Cover/Upper Cover */}
      <Cover
        img={menuImg}
        title={"Our Menu"}
        body={"Would you like to Try a Dish"}
      ></Cover>

      <SectionTitle
        subHeading={`Don't miss`}
        heading={`TODAY'S OFFER`}
      ></SectionTitle>

      {/* Offer */}
      <MenuCategory items={offered}></MenuCategory>

      {/* Pizza Items */}
      <MenuCategory
        title={`pizza`}
        coverImg={pizzaImg}
        items={pizza}
      ></MenuCategory>

      {/* Dessert Items */}
      <MenuCategory
        title={`dessert`}
        coverImg={dessertImg}
        items={desserts}
      ></MenuCategory>

      {/* Dessert Items */}
      <MenuCategory
        title={`salad`}
        coverImg={saladImg}
        items={salad}
      ></MenuCategory>

      {/* Dessert Items */}
      <MenuCategory
        title={`soup`}
        coverImg={soupImg}
        items={soup}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
