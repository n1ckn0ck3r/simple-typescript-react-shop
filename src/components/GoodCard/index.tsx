import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/cart/slice";
import styles from "./GoodCard.module.scss";
import { CartItem } from "../../redux/cart/types";
import { selectCartItem } from "../../redux/cart/selectors";

type GoodCardProps = {
	id: number;
	title: string;
	image: string;
	price: number;
	genre: string;
	publisher: string;
	releaseYear: number;
};

const GoodCard: FC<GoodCardProps> = ({
	id,
	title,
	image,
	price,
	genre,
	publisher,
	releaseYear,
}) => {
	const dispatch = useAppDispatch();
	const cartItem = useAppSelector(selectCartItem(id));
	const addItemToCart = (): void => {
		const item: CartItem = {
			id: id,
			title: title,
			image: image,
			price: price,
			amount: 1,
		};

		dispatch(addToCart(item));
	};

	return (
		<div className={styles.space}>
			<div className={styles.card}>
				<div className={styles.logo}>
					<img src={image} alt="Картинка" />
				</div>
				<div className={styles.info}>
					<h1>{title}</h1>
					<div className={styles.categories}>
						<h2>Некоторая информация: </h2>
						<p>Жанр: {genre}</p>
						<p>Издатель: {publisher}</p>
						<p>Год выхода: {releaseYear}</p>
					</div>
					<div className={styles.pricing}>
						<p>
							Цена:{" "}
							{price.toLocaleString("ru-RU", {
								style: "currency",
								currency: "RUB",
							})}
						</p>
						<button onClick={addItemToCart}>
							+ Добавить {cartItem?.amount}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GoodCard;
