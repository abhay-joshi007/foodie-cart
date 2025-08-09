import {CON_URL} from "../utils/constants";
const styleCard = {
    backgroundColor: "lightgray",
};
const RCard = (props) => {
    const{resData}=props;
    const cardInfo = resData?.info || {};
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, deliveryTime } = cardInfo;
    return (
        <div className=" m-4 p-4 w-[270px] rounded-lg " style={styleCard}>
            <img className=" h-[200px] w-[240px] rounded-lg" alt="r-food" src={CON_URL+`${cloudinaryImageId}`}height={"180px"} />
            <h3 className="font-bold">{name}</h3>
            <p className="my-2">{cuisines.join(" , ")}</p>
            <p className="my-2">{costForTwo}</p>
            <p>{avgRating} stars</p>
            <p>{deliveryTime} mins</p>
        </div>
    );
};
export default RCard;