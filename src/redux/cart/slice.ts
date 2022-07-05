import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLSCartItems } from "../../utils/getLSCartItems";
import { CartItem, CartState } from "./types";

const initialState: CartState = {
	cartItems: getLSCartItems(),
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>): void => {
			const item = state.cartItems.find(
				(item) => item.id === action.payload.id
			);

			if (item) {
				item.amount++;
			} else {
				state.cartItems = [...state.cartItems, action.payload];
			}
		},
		increaseAmount: (state, action: PayloadAction<number>): void => {
			const item = state.cartItems.find((item) => item.id === action.payload);

			if (item) {
				item.amount++;
			}
		},
		decreaseAmount: (state, action: PayloadAction<number>): void => {
			const item = state.cartItems.find((item) => item.id === action.payload);

			if (item && item.amount > 1) {
				item.amount--;
			}
		},
		deleteItem: (state, action: PayloadAction<number>): void => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
		},
		deleteEverything: (state) => {
			state.cartItems = [];
		},
	},
});

export const {
	addToCart,
	increaseAmount,
	decreaseAmount,
	deleteItem,
	deleteEverything,
} = cartSlice.actions;
export default cartSlice.reducer;
