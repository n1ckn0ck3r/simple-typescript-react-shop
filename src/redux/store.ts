import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import games from "./games/slice";
import cart from "./cart/slice";

export const store = configureStore({
	reducer: {
		filter,
		games,
		cart,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
