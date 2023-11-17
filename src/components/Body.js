import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filterRestro, setFilterRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestro(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestro(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  return (
    <>
      {listOfRestro?.length ? (
        <div>
          <div className="filters">
            <div className="search-filter">
              <input
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              ></input>
              <button onClick={()=>{
                console.log(searchText);

                const filteredRestaurant = listOfRestro.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
  
                setFilterRestro(filteredRestaurant);
              }}>Search</button>
            </div>
            <div className="rating-filter">
              <button
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
          </div>

          <div className="restros-container">
            {filterRestro.map((res) => (
              <div key={res?.info?.id}>
                <RestroCard resData={res?.info}></RestroCard>
              </div>
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
