import { FC } from "react";
import { Link } from "react-router-dom";
import CartItemComponent from "../../components/CartItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
	decreaseAmount,
	increaseAmount,
	deleteItem,
	deleteEverything,
} from "../../redux/cart/slice";
import styles from "./Cart.module.scss";
import { selectCartItems } from "../../redux/cart/selectors";
import { getTotalPrice } from "../../utils/getTotalPrice";
import { getTotalAmount } from "../../utils/getTotalAmount";
import { PayloadAction } from "@reduxjs/toolkit";

const Cart: FC = () => {
	const cartItems = useAppSelector(selectCartItems);
	const dispatch = useAppDispatch();

	if (cartItems.length === 0) {
		return (
			<div className={styles.empty}>
				Ваша корзина пуста, можете вернуться на{" "}
				<Link to="/">главную страницу магазина</Link>
			</div>
		);
	}

	const increaseItems = (id: number): PayloadAction<number> =>
		dispatch(increaseAmount(id));

	const decreaseItems = (id: number): PayloadAction<number> =>
		dispatch(decreaseAmount(id));

	const deleteItemFromCart = (id: number): PayloadAction<number> =>
		dispatch(deleteItem(id));

	const clearCart = (): void => {
		if (window.confirm("Вы действительно хотите очистить корзину?")) {
			dispatch(deleteEverything());
		}
	};

	return (
		<div className={styles.cart}>
			<h1>Ваша корзина</h1>
			<button className={styles.clear} onClick={clearCart}>
				<p>&#10006;</p>
			</button>
			<div className={styles.cartContent}>
				{cartItems.map((item) => (
					<CartItemComponent
						key={item.id}
						{...item}
						increase={increaseItems}
						decrease={decreaseItems}
						deleteItem={deleteItemFromCart}
					/>
				))}
			</div>
			<div className={styles.cartInfo}>
				<div className={styles.totalAmount}>
					Общее количество товаров: {getTotalAmount(cartItems)}
				</div>
				<div className={styles.totalPrice}>
					Общая цена:{" "}
					{getTotalPrice(cartItems).toLocaleString("ru-RU", {
						style: "currency",
						currency: "RUB",
					})}
				</div>
			</div>
		</div>
	);
};

export default Cart;
