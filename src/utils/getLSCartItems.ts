import { CartItem } from "../redux/cart/types";

export const getLSCartItems = (): CartItem[] => {
	const items: string | null = localStorage.getItem("cart");

	if (items) {
		return JSON.parse(items);
	}

	return [];
};
