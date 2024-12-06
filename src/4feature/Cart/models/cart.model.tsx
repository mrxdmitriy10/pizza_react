import { createSlice } from "@reduxjs/toolkit";

import { TcartWidgetsSlice } from "../../placeOrder";

const cartWidgetSlice = createSlice({
  name: "cartWidget",
  initialState: { isVisible: false },
  reducers: {
    toogleCartWidgetsVisibleAction: (state: TcartWidgetsSlice) => {

      
      state.isVisible = !state.isVisible
    },

    hideCartWidgetsAction: (state: TcartWidgetsSlice) => {

      
      state.isVisible = false
    },

  },
});

export const { toogleCartWidgetsVisibleAction, hideCartWidgetsAction } = cartWidgetSlice.actions;
export const cartWidgetReducer = cartWidgetSlice.reducer;
