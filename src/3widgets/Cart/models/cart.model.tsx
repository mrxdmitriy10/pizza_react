import { createSlice } from "@reduxjs/toolkit";

import { TcartWidgetsSlice } from "..";

const cartWidgetSlice = createSlice({
  name: "cartWidget",
  initialState: { isVisible: false },
  reducers: {
    toogleCartWidgetsVisible: (state: TcartWidgetsSlice) => {
      !state.isVisible;
    },
  },
});

export const { toogleCartWidgetsVisible } = cartWidgetSlice.actions;
export const cartWidgetReducer = cartWidgetSlice.reducer;
