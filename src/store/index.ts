import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchReducer from "./search";
import modalReducer from "./modal";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
