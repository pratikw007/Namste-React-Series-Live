import { IMG_CDN_URl } from "./config";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    //  {restaurant} --> Destructuraing
    return (
      <div className="card">
        <img
          src={
             IMG_CDN_URl +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };
  
  export default RestrauntCard;