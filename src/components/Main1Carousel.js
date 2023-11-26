import React from "react";
import { CDN_URL } from "../utils";
import { Link } from "react-router-dom";

const Main1Carousel = (props) => {
  console.log(props);
  let carousel0 =
    props?.carousleData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
      ?.info;
  

  // console.log(carousel0);
  // console.log(carousel1);

  const handleScrollLeft = () => {
    // console.log("handle");
    const foodCategory = document.querySelector(".carousel1");
    foodCategory.scrollLeft = foodCategory.scrollLeft - 550;
  };

  const handleScrollRight = () => {
    // console.log("handleScrollRight");
    const foodCategory = document.querySelector(".carousel1");
    foodCategory.scrollLeft = foodCategory.scrollLeft + 550;
  };

  return (
    <>
      <div className="best-offers">
        <div className="prevBtn">
          <div>
            <h1>Best offers for you</h1>
          </div>
          <div >
            <button onClick={handleScrollLeft}>prev</button>
            <button onClick={handleScrollRight}>next</button>
          </div>
        </div>

        <div className="carousel1">
          {carousel0?.map((caro) => (
            <Link to={caro?.action?.link} key={caro?.id}>
              <div>
                <img src={CDN_URL + caro?.imageId} alt="immmm"></img>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main1Carousel;
