import { CDN_URL } from "../utils";

const RestroCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    sla
  } = resData;
  return (
    <>
      <div className="restro-card">
        <img className="restro-img" src={CDN_URL + cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </>
  );
};

export default RestroCard;
