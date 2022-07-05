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
	return (
		<div className={styles.cartItem}>
			<div className={styles.image}>
				<img src={image} alt={"Картинка игры"} />
			</div>
			<h3>{title}</h3>
			<div className={styles.amount}>
				<button className={styles.increase} onClick={() => increase(id)}>
					+
				</button>
				<p>{amount}</p>
				<button
					className={styles.decrease}
					onClick={() => decrease(id)}
					disabled={amount === 1}>
					<p>-</p>
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
			<button className={styles.delete} onClick={() => deleteItem(id)}>
				&#10006;
			</button>
		</div>
	);
};

export default CartItemComponent;
