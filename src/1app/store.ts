import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../5entities/Cart";
import { pizzasReducer } from "../5entities/PizzaList";
import { cartWidgetReducer } from "../4feature/Cart/placeOrder";


export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    pizzasReducer: pizzasReducer,
    cartWidgetSliceReducer: cartWidgetReducer,
  },
});
