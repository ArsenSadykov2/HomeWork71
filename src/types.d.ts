export interface IDish {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface IDishMutation {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface DishCart {
  dish: IDish;
  amount: number;
}
