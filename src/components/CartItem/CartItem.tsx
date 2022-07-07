import { FC } from "react";
import styles from "./CartItem.module.scss";

type CartItemProps = {
	id: number;
	title: string;
	image: string;
	price: number;
	amount: number;
	increase: (id: number) => void;
	decrease: (id: number) => void;
	deleteItem: (id: number) => void;
};

const CartItemComponent: FC<CartItemProps> = ({
	id,
	title,
	image,
	price,
	amount,
	increase,
	decrease,
	deleteItem,
}) => {
	const increaseItemAmount = (): void => increase(id);

	const decreaseItemAmount = (): void => decrease(id);

	const removeItem = (): void => {
		if (
			window.confirm("Вы действительно хотите удалить этот товар из корзины? ")
		) {
			deleteItem(id);
		}
	};

	return (
		<div className={styles.cartItem}>
			<div className={styles.image}>
				<img src={image} alt={"Картинка игры"} />
			</div>
			<h3>{title}</h3>
			<div className={styles.amount}>
				<button
					className={styles.decrease}
					onClick={decreaseItemAmount}
					disabled={amount === 1}>
					<p>-</p>
				</button>
				<p>{amount}</p>
				<button className={styles.increase} onClick={increaseItemAmount}>
					+
				</button>
			</div>
			<div className={styles.price}>
				<p>
					Цена за один товар: <br />
					<span>
						{price.toLocaleString("ru-RU", {
							style: "currency",
							currency: "RUB",
						})}
					</span>
				</p>
				<p>
					Цена за {amount} товаров: <br />
					<span>
						{(price * amount).toLocaleString("ru-RU", {
							style: "currency",
							currency: "RUB",
						})}
					</span>
				</p>
			</div>
			<button className={styles.delete} onClick={removeItem}>
				&#10006;
			</button>
		</div>
	);
};

export default CartItemComponent;
