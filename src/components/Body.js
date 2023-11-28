import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import RestroCard, { withOfferLabel } from "./RestroCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import Main1Carousel from "./Main1Carousel";
import Main2Carousel from "./Main2Carousel";
import Main3Carousel from "./Main3Carousel";
import UserContext from "../customHooks/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filterRestro, setFilterRestro] = useState([]);
  const [carousle, setCarousle] = useState([]);

  const RestroCardPromoted = withOfferLabel(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setCarousle(json);

    setListOfRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  
  let context = useContext(UserContext);
  console.log(context);

  return (
    <>
      <div>
        <Main1Carousel carousleData={carousle} />
      </div>

      <div>
        <Main2Carousel carousleData={carousle} />
      </div>

      <div>
        <Main3Carousel carousleData={carousle} />
      </div>

      {listOfRestro?.length ? (
        <div className="best-offers">
          <h1>Restaurants with online food delivery in Bangalore</h1>
          <div className="filters m-10 flex">
            <div className="search-filter">
              <input
                className="border-2 border-black bg-slate-200 ps-3"
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              ></input>
              <button
                className="border-black border-2 px-6"
                onClick={() => {
                  console.log(searchText);

                  const filteredRestaurant = listOfRestro.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );

                  setFilterRestro(filteredRestaurant);
                }}
              >
                Search
              </button>
            </div>
            <div className="rating-filter ms-10">
              <button
                className="border-2 border-black px-6"
                onClick={() => {
                  const topRestro = filterRestro.filter((res) => {
                    return res?.info?.avgRating > 4;
                  });

                  setFilterRestro(topRestro);
                }}
              >
                Top Rated Restaurants
              </button>
            </div>

            <input
              type="text"
              value={context.loggedInUser}
              onChange={(e) => {
              
              context.setUserName(e.target.value);
              }}
            ></input>
          </div>

          <div className="restros-container flex flex-wrap">
            {filterRestro.map((res) => (
              <Link to={"/restro/" + res?.info?.id} key={res?.info?.id}>
                {res?.info?.aggregatedDiscountInfoV2 ? (
                  <RestroCard resData={res?.info} />
                ) : (
                  <RestroCardPromoted resData={res?.info} />
                )}

                {/* <RestroCard resData={res?.info}></RestroCard> */}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Shimmer></Shimmer>
      )}
    </>
  );
};

export default Body;
