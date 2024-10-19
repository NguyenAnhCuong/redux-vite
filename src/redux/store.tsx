import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slice";
import userReducer from "./users/user.slice";

export const store = configureStore({
  reducer: { count: counterReducer, user: userReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
