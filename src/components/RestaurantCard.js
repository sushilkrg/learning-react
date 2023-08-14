import { IMG_CDN } from "../../config";

const Restaurantcard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  deliveryTime,
}) => {
  return (
    <div className="card-details">
      <div className="card">
        <img src={IMG_CDN + cloudinaryImageId} alt="img" />
        <div className="ratings">
          <p style={{ margin: "0" }}>
            <strong>{name}</strong>
          </p>
        </div>
        <small>{cuisines.join(", ")}</small> <br /> <br />
        <p style={{ display: "flex", justifyContent: "space-around" }}>
          <small
            style={ avgRating > 3 ? { color: "green" } : { color: "orange" }}
          >
            {avgRating}
          </small>
          {/* console.log(deliveryTime); */}
          <small>{costForTwo}</small>
          <small>{deliveryTime}</small>
        </p>
      </div>
    </div>
  );
};

export default Restaurantcard;
