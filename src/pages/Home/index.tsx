import { FC, useCallback, useEffect } from "react";
import Filters from "../../components/Filters";
import GoodsList from "../../components/GoodsList";
import { fetchGoods } from "../../redux/games/asyncActions";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./Home.module.scss";

const Home: FC = () => {
	const dispatch = useAppDispatch();

	const getGoods = useCallback<() => void>((): void => {
		dispatch(fetchGoods());
	}, [dispatch]);

	useEffect((): void => {
		getGoods();
	}, [getGoods]);

	return (
		<div className={styles.home}>
			<GoodsList />
			<Filters />
		</div>
	);
};

export default Home;
