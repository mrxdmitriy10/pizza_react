import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../2pages/Pizzas";

export const store = configureStore({
    reducer: {
        cartReducer: reducers.cartReducer,
        pizzasReducer: reducers.pizzasReducer
    }
})







