import { createSlice } from "@reduxjs/toolkit";

import { TcartWidgetsSlice } from "../../placeOrder";

const cartWidgetSlice = createSlice({
  name: "cartWidget",
  initialState: { isVisible: false },
  reducers: {
    toogleCartWidgetsVisibleAction: (state: TcartWidgetsSlice) => {

      
      state.isVisible = !state.isVisible
    },
  },
});

export const { toogleCartWidgetsVisibleAction } = cartWidgetSlice.actions;
export const cartWidgetReducer = cartWidgetSlice.reducer;
