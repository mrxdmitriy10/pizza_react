import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { cartReducer, pizzaReducer } from './slices';

export const store = configureStore({
    reducer: {
        pizzaReducer,
        cartReducer
    }
})




export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types


