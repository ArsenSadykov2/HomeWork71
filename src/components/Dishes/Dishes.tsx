import * as React from "react";
import { IDish } from "../../types";
import DishItem from "./DishItem.tsx";

interface Props {
  dishes: IDish[];
  addToCart: (dish: IDish) => void;
}

const Dishes: React.FC<Props> = ({ dishes, addToCart }) => {
  return (
    <>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} onItemClick={addToCart} />
      ))}
    </>
  );
};

export default Dishes;
