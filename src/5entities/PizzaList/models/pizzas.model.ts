import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TpizzaState } from './pizzas.types';
import { Tpizza } from "../../Pizza/models/pizza.types";



const pizzas: Tpizza[] = [
  {
    name: "Неополитанская",
    description: "Итальянская пицца с изысканым вкусом и острым соусом",
    variant: [
      {
        size: "25 см",
        price: 1000,
      },
      {
        size: "35 см",
        price: 2000,
      },
      {
        size: "40 см",
        price: 4000,
      },
    ],
    img: "https://media.dodostatic.net/image/r:760x760/11EE7D6154C786F2940500127AA6D33E.avif",
  },
  {
    name: "Маргарита",
    description: "Классика с томатами и моцареллой",

    variant: [
        {
          size: "25 см",
          price: 1000,
        },
        {
          size: "35 см",
          price: 2000,
        },
        {
          size: "40 см",
          price: 4000,
        },
      ],
      img: "https://media.dodostatic.net/image/r:760x760/11EE7D610649F9A898C96EE96FEA37A5.avif",

  },
  {
    name: "Пепперони",
    description: "Пицца покрытая колбасой и салями не оставит вас равнодушным",

    variant: [
        {
          size: "25 см",
          price: 1000,
        },
        {
          size: "35 см",
          price: 2000,
        },
        {
          size: "40 см",
          price: 4000,
        },
      ],
      img: "https://media.dodostatic.net/image/r:760x760/11EE7D6130241E75B0AB33725248C0D0.avif",

  },
];



const pizzasSlice = createSlice({
  name: "pizza",
  initialState: {
    data: pizzas,
  },
  reducers: {
    addPizzaAction: (state: TpizzaState, action: PayloadAction<Tpizza>) => {
      state.data.push(action.payload);
    },
  },
});




export const { addPizzaAction } = pizzasSlice.actions;

export const pizzasReducer = pizzasSlice.reducer;
