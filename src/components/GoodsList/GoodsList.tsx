import { FC } from "react";
import { selectSelectedGenres } from "../../redux/filter/selectors";
import { useAppSelector } from "../../redux/hooks";
import { Game, Status } from "../../redux/games/types";
import GoodCard from "../GoodCard";
import styles from "./GoodsList.module.scss";
import { selectGamesState } from "../../redux/games/selectors";

const GoodsList: FC = () => {
	const { games, status } = useAppSelector(selectGamesState);
	const selectedGenres = useAppSelector(selectSelectedGenres);
	const genreNames = selectedGenres.map((item) => item.name);

	const getGamesArray = (): Game[] =>
		games.filter((game) => genreNames.includes(game.genre));

	if (status === Status.LOADING) {
		return <div className={styles.loading}>Идёт загрузка...</div>;
	}

	if (getGamesArray().length === 0 || status === Status.ERROR) {
		return (
			<div className={styles.nothing}>
				<h1>
					К сожалению, по вашему запросу ничего не найдено, или произошла
					ошибка😥
				</h1>
			</div>
		);
	}

	return (
		<div className={styles.list}>
			{status === Status.SUCCESS &&
				getGamesArray().map((game) => <GoodCard key={game.id} {...game} />)}
		</div>
	);
};

export default GoodsList;
