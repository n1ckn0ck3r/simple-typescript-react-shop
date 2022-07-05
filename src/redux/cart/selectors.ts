import { RootState } from "../store";
import { CartItem } from "./types";

export const selectCartItems = (state: RootState): CartItem[] =>
	state.cart.cartItems;
export const selectCartItem =
	(id: number) =>
	(state: RootState): CartItem | undefined =>
		state.cart.cartItems.find((item) => item.id === id);
