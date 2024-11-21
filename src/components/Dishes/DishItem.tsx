import { IDish } from "../../types";
import * as React from "react";

interface Props {
  dish: IDish;
  onItemClick: (dish: IDish) => void;
}

const DishItem: React.FC<Props> = ({ dish, onItemClick }) => {
  let imageUrl =
    "https://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-small.png";

  const imageStyle = {
    background: `url(${dish.imageUrl || imageUrl}) center center / cover no-repeat`,
  };

  return (
    <div className="card mb-3" onClick={() => onItemClick(dish)}>
      <div className="row justify-content-center p-2">
        <div className="col-5" style={imageStyle} />
        <div className="col-6">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
          <p className="card-text">{dish.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
