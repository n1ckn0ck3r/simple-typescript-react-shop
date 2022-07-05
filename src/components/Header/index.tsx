import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import cartLogo from "../../assets/cart.png";

const Header: FC = () => {
	const location = useLocation();

	return (
		<div className={styles.header}>
			<Link to="/" className={styles.title}>
				Магазин фигни
			</Link>
			{location.pathname !== "/cart" && (
				<Link to="/cart" className={styles.cartLogo}>
					<img src={cartLogo} alt="Корзина" />
				</Link>
			)}
		</div>
	);
};

export default Header;
