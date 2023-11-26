import { CDN_URL } from "../utils";

const RestroCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    areaName
  } = resData;
  return (
    <>
      <div className="restro-card w-56 border-2 border-slate-500 p-3 m-9">
        <img className="restro-img" src={CDN_URL + cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h4>{areaName}</h4>
        <h4>{cuisines.length <= 3 ? (cuisines.join(", ")) : (cuisines.slice(0,3).join(", ")+"...")}</h4>
        {avgRating>=4 ? <h4 className="greenRating">{avgRating} stars</h4> : <h4 className="redRating">{avgRating} stars</h4>}
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </>
  );
};




// higher order components

export const withOfferLabel = (RestroCard)=>{
  return (props)=>{
    // console.log(props)
    return (
      <>
     
      <RestroCard {...props}/>
      <h2 className="labelDiscount">{props.resData.aggregatedDiscountInfoV3?.header} { props.resData.aggregatedDiscountInfoV3?.subHeader}</h2>
      </>
    )
  }
}

export default RestroCard;
