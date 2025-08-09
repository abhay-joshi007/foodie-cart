import RCard from "./Rescard";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/showOnlinestatus";
import DeliveryDash from "../utils/game";

const Body = () => {
  const [restList, setRestList] = useState([]); 
  const [filterRestList, setFilterRestList] = useState([]); 
  const [searchText, setSearchText] = useState("");

  // Declare fetchData properly with const
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6148698&lng=73.8729867&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const newRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(newRestaurants);
    setRestList(newRestaurants);
    setFilterRestList(newRestaurants);
  };

  // Run fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    DeliveryDash();
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            className="p-1 px-1 m-3 border border-gray-300 rounded placeholder-gray-500  focus:ring-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-4"
            onClick={() => {
              const filterRestaurant = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestList(filterRestaurant);
            }}
          >
            Search
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const filterList = restList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilterRestList(filterList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex  justify-around flex-wrap ">
        {filterRestList.map((restaurant) => (
          <RCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
