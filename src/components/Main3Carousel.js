import React from "react";
import { CDN_URL } from "../utils";
import { Link } from "react-router-dom";

const Main3Carousel = (props) => {
  console.log(props);
  let carousel3 =
    props?.carousleData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//   let carousel1 = props?.carousleData?.data?.cards[1]?.card?.card;

  
  console.log(carousel3);

  const handleScrollLeft = () => {
    console.log("handle");
    const foodCategory = document.querySelector(".topRestro");
    foodCategory.scrollLeft = foodCategory.scrollLeft - 450;
  };

  const handleScrollRight = () => {
    console.log("handleScrollRight");
    const foodCategory = document.querySelector(".topRestro");
    foodCategory.scrollLeft = foodCategory.scrollLeft + 450;
  };

  return (
    <>
      <div className="best-offers">
        <div className="prevBtn">
          <div>
            <h1>Top restaurant chains in Bangalore</h1>
          </div>
          <div >
            <button onClick={handleScrollLeft}>prev</button>
            <button onClick={handleScrollRight}>next</button>
          </div>
        </div>

        <div className="topRestro">
          {carousel3?.map((caro) => (
            <Link to={"/restro/" + caro?.info?.id} key={caro?.info?.id}>
              <div>
                <img src={CDN_URL + caro?.info?.cloudinaryImageId} alt="immmm"></img>
                
              </div>
              
              <h4>{caro?.info?.name}</h4>
              
         <p className="greenRating">{caro?.info?.avgRating} stars </p>
         <p> . {caro?.info?.sla.deliveryTime} minutes</p> 
        <p>{caro?.info?.cuisines.length <= 3 ? (caro?.info?.cuisines.join(", ")) : (caro?.info?.cuisines.slice(0,3).join(", ")+"...")}</p>
        
        
        <p>{caro?.info?.areaName}</p>
        
              
            </Link>
          ))}
        </div>

        <hr/>
      </div>
    </>
  );
};

export default Main3Carousel;
