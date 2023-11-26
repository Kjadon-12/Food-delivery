import React from "react";
import { CDN_URLI } from "../utils";
import { Link } from "react-router-dom";

const Main2Carousel = (props) => {
  console.log(props);
  let carousel1 =
    props?.carousleData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.info;
//   let carousel1 = props?.carousleData?.data?.cards[1]?.card?.card;

  
  console.log(carousel1);

  const handleScrollLeft = () => {
    console.log("handle");
    const foodCategory = document.querySelector(".foodCategory");
    foodCategory.scrollLeft = foodCategory.scrollLeft - 250;
  };

  const handleScrollRight = () => {
    console.log("handleScrollRight");
    const foodCategory = document.querySelector(".foodCategory");
    foodCategory.scrollLeft = foodCategory.scrollLeft + 250;
  };

  return (
    <>
      <div className="best-offers">
        <div className="prevBtn">
          <div>
            <h1>What's on your mind?</h1>
          </div>
          <div >
            <button onClick={handleScrollLeft}>prev</button>
            <button onClick={handleScrollRight}>next</button>
          </div>
        </div>

        <div className="foodCategory">
          {carousel1?.map((caro) => (
            <Link to={caro?.action?.link} key={caro?.id}>
              <div>
                <img src={CDN_URLI + caro?.imageId} alt="immmm"></img>
                
              </div>
              
            </Link>
          ))}
        </div>

        <hr/>
      </div>
    </>
  );
};

export default Main2Carousel;
