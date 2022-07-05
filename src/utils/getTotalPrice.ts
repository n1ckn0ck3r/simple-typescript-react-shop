import { CartItem } from "../redux/cart/types";

export const getTotalPrice = (items: CartItem[]): number =>
	items.reduce(
		(sum: number, item: CartItem) => (sum += item.price * item.amount),
		0
	);
