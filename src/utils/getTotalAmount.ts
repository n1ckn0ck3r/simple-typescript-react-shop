import { CartItem } from "../redux/cart/types";

export const getTotalAmount = (items: CartItem[]): number =>
	items.reduce((sum: number, item: CartItem) => (sum += item.amount), 0);
