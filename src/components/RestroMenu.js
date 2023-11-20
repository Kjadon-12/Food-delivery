import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils";


const RestroMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  let { restroId } = useParams();
  console.log(restroId);
  useEffect(() => {
    fetchMenuItems();
  }, []);
  const fetchMenuItems = async () => {
    const data = await fetch(
      `${MENU_API}restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    setResInfo(json.data);
  };

  if(resInfo===null){
    return (<Shimmer/>)
}
  console.log(resInfo)
  
// const {
//     name = "",
//     areaName = "",
//     cuisines = [],
//     costForTwoMessage = ""
//   } = resInfo?.cards?.[0]?.card?.card?.info || {};



const {
         name,
        areaName,
        cuisines,
        costForTwoMessage
      } = resInfo?.cards?.[0]?.card?.card?.info

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(itemCards)
   console.log(categories);
  return (
    <>
      
        
          <h1>{name}</h1>
          <h2>{areaName}</h2>
          <h2>{cuisines.join(" , ")}</h2>
          <h2>{costForTwoMessage}</h2>

          <h1>Food Menu</h1>
          <ol>
          {itemCards.map((menu)=>(
              <li key={menu.card.info.id}>{menu.card.info.name }-RS. {menu.card.info.price/100}</li>
            ))}
          </ol>
          
        
    </>
  );
};

export default RestroMenu;
