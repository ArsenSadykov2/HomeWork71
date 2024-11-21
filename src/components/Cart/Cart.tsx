import CartItem from "./CartItem.tsx";
import { DishCart } from "../../types";
import * as React from "react";

interface Props {
  cart: DishCart[];
}

const Cart: React.FC<Props> = ({ cart }) => {
  const total = cart.reduce((acc, cartDish) => {
    acc = acc + cartDish.dish.price * cartDish.amount + 150;
    return acc;
  }, 0);

  let cartList = (
    <>
      <h6 className="text-center my-4">No Pizza's yet</h6>
    </>
  );

  if (cart.length > 0) {
    cartList = (
      <div className="row">
        {cart.map((cartDish) => (
          <CartItem key={cartDish.dish.id} cartDish={cartDish} />
        ))}
      </div>
    );
  }

  return (
    <>
      <h4>Cart</h4>
      {cartList}
      <div className="row align-items-center justify-content-center">
        <div className="text-start col-4 p-0">
          <p>
            <strong>Total:</strong>{" "}
          </p>
        </div>
        <div className="text-end col-4 p-0">
          <p>{total} SOM</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
