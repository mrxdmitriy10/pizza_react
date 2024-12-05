export interface Tpizza {
    name: string;
    description: string;
    variant: {
      size: string;
      price: number;
    }[];
    img: string;
    ingridients: Tingridients[]
  }


export enum Tingridients {
  "chicken" = "курица",
  "mushrooms" = "грибы",
  "chease" = "сыр",
}

  export interface TpizzaState{
    selectPizza?: Tpizza;

  }