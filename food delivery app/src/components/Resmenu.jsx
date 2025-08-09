import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurant from "../utils/userestaurant";

const RestaurantMenu = () => {
    const { resid } = useParams();
    const resinfo = useRestaurant(resid);

    if (!resinfo) {
        return <Shimmer />;
    }

    // Debug API response
    console.log("API Response:", resinfo);

    // Safely get restaurant info with fallback values
    const info = resinfo?.data?.cards?.[2]?.card?.card?.info || {};
    const { name = "No Name", cuisines = [], costForTwoMessage = "N/A" } = info;

    // Safely get item cards with a fallback to an empty array
    const itemCards = resinfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

    return (
        <div className="Menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <ul>
                {itemCards.length > 0 ? (
                    itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - Rs.
                            {(item?.card?.info?.defaultPrice || item?.card?.info?.finalPrice || item?.card?.info?.price || 0) / 100.0}
                        </li>
                    ))
                ) : (
                    <p>No items available</p>
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
