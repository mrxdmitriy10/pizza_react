import { configureStore } from "@reduxjs/toolkit";

import { pizzasReducer } from "../5entities/PizzaList";

import { orderReducer } from "../5entities/Order";
import { cartWidgetReducer } from "../4feature/placeOrder";


export const store = configureStore({
  reducer: {
    orderReducer: orderReducer,
    pizzasReducer: pizzasReducer,
    cartWidgetSliceReducer: cartWidgetReducer,
  },
});
