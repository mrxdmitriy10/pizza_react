import { store } from "../src/1app/store"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch