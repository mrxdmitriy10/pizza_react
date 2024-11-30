import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import { TOrderStage, TOrderSlice } from '..';


const orderStageSlice = createSlice({
  name: "orderFeature",
  initialState: { 
    orderStage: TOrderStage.OrderView
  } as TOrderSlice,
  reducers: {
    toogleStage: (state, action: PayloadAction<TOrderStage>) => {
      state.orderStage = action.payload;
    },
  },
});

export const { toogleStage } = orderStageSlice.actions;
export const cartWidgetReducer = orderStageSlice.reducer;
