import { useState } from "react";
import { IDishMutation } from "../../types";
import * as React from "react";

interface Props {
  addNewDish: (newDish: IDishMutation) => void;
}

const DishForm: React.FC<Props> = ({ addNewDish }) => {
  const [newDish, setNewDish] = useState<IDishMutation>({
    name: "",
    description: "",
    imageUrl: "",
    price: 0,
  });

  const changeDish = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewDish((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      newDish.name.trim().length === 0 ||
      newDish.description.trim().length === 0 ||
      newDish.price === 0
    ) {
      alert("Заполните все поля. Поле с картинкой опционально");
    } else {
      addNewDish({
        id: String(new Date()),
        ...newDish,
        price: Number(newDish.price),
      });
      setNewDish({
        name: "",
        description: "",
        imageUrl: "",
        price: 0,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new dish</h3>

      <div className="form-group mb-2">
        <label htmlFor="name">Title</label>
        <input
          onChange={changeDish}
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={newDish.name}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={changeDish}
          name="description"
          id="description"
          className="form-control"
          value={newDish.description}
          required
        ></textarea>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="imageUrl">Url Image</label>
        <input
          onChange={changeDish}
          type="url"
          id="imageUrl"
          name="imageUrl"
          className="form-control"
          value={newDish.imageUrl}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="price">Price: </label>
        <input
          onChange={changeDish}
          type="number"
          id="price"
          name="price"
          min={0}
          className="form-control"
          value={newDish.price}
        />
      </div>

      <button className="btn btn-danger">Add new Dish</button>
    </form>
  );
};

export default DishForm;
