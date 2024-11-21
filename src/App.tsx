import { DishCart, IDish } from "./types";
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import DishForm from "./components/DishForm/DishForm.tsx";
import Dishes from "./components/Dishes/Dishes.tsx";
import Cart from "./components/Cart/Cart.tsx";
import { useState } from "react";
import Modal from "./components/Ui/Modal/Modal.tsx";

const Pizza = () => {
  const [cart, setCart] = useState<DishCart[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dishes, setDishes] = useState<IDish[]>([
    {
      id: "1",
      name: "Pepperoni",
      description: "lots of sausage",
      price: 555,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnWYk05nhD89qd5NO6I9n8ivr9jFktDkIuw&s",
    },
    {
      id: "2",
      name: "Cheese",
      description: "lots of cheese",
      price: 500,
      imageUrl:
        "https://arigator.ru/upload/resize_cache/iblock/842/1000_1000_0/842bc85885646e021c01c140941edc3b.jpg",
    },
    {
      id: "3",
      name: "Jalapeno",
      description: "spicy pizza",
      price: 600,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rTtkyHI1oEcIgO7Mj5Mmtu4iPDtBEANOzw&s",
    },
  ]);

  const addNewDish = (newDish: IDish) => {
    setDishes((prevState) => [newDish, ...prevState]);
  };

  const addDishToCart = (dish: IDish) => {
    setCart((prevState) => {
      let indexDish = prevState.findIndex((dishCart) => dishCart.dish === dish);
      if (indexDish === -1) {
        return [...prevState, { dish, amount: 1 }];
      } else {
        const cartCopy = [...prevState];
        const copyDishCart = { ...cartCopy[indexDish] };
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;
        return [...cartCopy];
      }
    });
  };

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal
        show={showModal}
        closeModal={closeModalWindow}
        title="Check your Order"
      >
        Уточнение заказа
      </Modal>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className=" row">
          <div className="col-4 mb-2">
            <DishForm addNewDish={addNewDish} />
          </div>
          <div className="col-4 mb-2">
            <Dishes dishes={dishes} addToCart={addDishToCart} />
          </div>
          <div className="col-4 mb-2">
            <Cart cart={cart} />
            <button
              className="btn btn-danger"
              onClick={() => setShowModal(!showModal)}
            >
              Order
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pizza;
