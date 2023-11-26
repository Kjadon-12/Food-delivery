import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils";
import useRestroMenu from "../customHooks/useRestroMenu";
import FoodCategory from "./FoodCategory";

const RestroMenu = () => {
  //   const [resInfo, setResInfo] = useState(null);
  // const [showIndex, setShowIndex] = useState(0);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
  
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
 
  let { restroId } = useParams();
  console.log(restroId);
  const resInfo = useRestroMenu(restroId);
  //   useEffect(() => {
  //     fetchMenuItems();
  //   }, []);
  //   const fetchMenuItems = async () => {
  //     const data = await fetch(
  //       `${MENU_API}restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`
  //     );
  //     const json = await data.json();

  //     setResInfo(json.data);
  //   };

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);

  // const {
  //     name = "",
  //     areaName = "",
  //     cuisines = [],
  //     costForTwoMessage = ""
  //   } = resInfo?.cards?.[0]?.card?.card?.info || {};

  const { name, areaName, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(itemCards);
  console.log(categories);
  return (
    <>
      <div className="menu-restro">
        <h1>{name}</h1>
        <h2>{areaName}</h2>
        <h2>{cuisines.join(" , ")}</h2>
        <h2>{costForTwoMessage}</h2>

        <h1>Food Menu</h1>
      </div>
      <div>
        {categories?.map((menu, idx) => (
          // <li key={menu.card.info.id}>{menu.card.info.name }-RS. {menu.card.info.price/100}</li>
          <FoodCategory
            key={idx}
            menuData={menu?.card?.card}
            showItems={ expandedIndex === idx }
            setShowIndex={() => handleToggle(idx)}
            
          />
        ))}
      </div>
    </>
  );
};

export default RestroMenu;
