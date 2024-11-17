import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface pizzaType {
  name: string;
  description: string;
  variant: {
    size: string;
    price: number;
  }[],
  img: string
}

const pizzas: pizzaType[] = [
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

interface pizzaState {
  data: pizzaType[];
}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    data: pizzas,
  },
  reducers: {
    addPizza: (state: pizzaState, action: PayloadAction<pizzaType>) => {
      state.data.push(action.payload);
    },
  },
});

export interface itemCartType {
  name: pizzaType["name"];
  size: string;
  price: number;
}

interface cartSliceType {
  data: itemCartType[];
  count: number;
  price: number
  visible: boolean;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [], count: 0, price: 0, visible: false },
  reducers: {
    addtoCart: (state: cartSliceType, action: PayloadAction<itemCartType>) => {
      state.data.push(action.payload);
      state.count++;
      state.price= state.price +action.payload.price
    },
    deleteFromCart: (state: cartSliceType, action: PayloadAction<number>) => {
      state.count--;

      state.price = state.price-state.data[action.payload].price
      state.data.splice(action.payload, 1);
    },

    toogleCartVisible: (state: cartSliceType) => {
        state.visible = !state.visible
    },
    resetCartData: (state: cartSliceType) => {
        state.data = []
        state.count = 0
        state.price = 0
    }
  },
});

export const { addtoCart,deleteFromCart, toogleCartVisible, resetCartData } = cartSlice.actions;

export const { addPizza } = pizzaSlice.actions;

export const cartReducer = cartSlice.reducer;
export const pizzaReducer = pizzaSlice.reducer;
