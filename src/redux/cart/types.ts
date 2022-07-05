export type CartItem = {
	id: number;
	title: string;
	image: string;
	price: number;
	amount: number;
};

export interface CartState {
	cartItems: CartItem[];
}
