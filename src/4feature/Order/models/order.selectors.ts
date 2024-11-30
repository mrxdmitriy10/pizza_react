import { createSelector } from "reselect";
import { RootState } from "../../../1app/store.d";

export const isVisibleSelector = createSelector(
    (state: RootState) => state.cartWidgetSliceReducer,
    (cartWidget) => cartWidget.isVisible,
  )