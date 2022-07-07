import { PayloadAction } from "@reduxjs/toolkit";
import { FC, useState } from "react";
import { Genre } from "../../redux/filter/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
	addAllGenresToSelected,
	addSelectedGenre,
	removeAllGenresFromSelected,
	removeSelectedGenre,
} from "../../redux/filter/slice";
import styles from "./Filters.module.scss";
import { selectFilter } from "../../redux/filter/selectors";

const Filters: FC = () => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const { allGenres, selectedGenres } = useAppSelector(selectFilter);
	const dispatch = useAppDispatch();

	const toggleVisibility = (): void => setIsOpened(!isOpened);

	const toggleSelectedGenre = (selectedGenre: Genre): PayloadAction<Genre> =>
		selectedGenres.includes(selectedGenre)
			? dispatch(removeSelectedGenre(selectedGenre))
			: dispatch(addSelectedGenre(selectedGenre));

	const toggleAllGenres = (): PayloadAction =>
		allGenres.length === selectedGenres.length
			? dispatch(removeAllGenresFromSelected())
			: dispatch(addAllGenresToSelected());

	if (!isOpened) {
		return (
			<div className={styles.openButton} onClick={toggleVisibility}>
				<p>{"<"}</p>
			</div>
		);
	}

	return (
		<div className={styles.filters}>
			<div className={styles.closeButton} onClick={toggleVisibility}>
				<p>{">"}</p>
			</div>
			<h1>Фильтры</h1>
			<div className={styles.genreFilter}>
				<h2>По жанру: </h2>
				<ul className={styles.genres}>
					<li key={"Все"}>
						<input
							type={"checkbox"}
							checked={allGenres.length === selectedGenres.length}
							onChange={toggleAllGenres}
						/>
						<label>Все</label>
					</li>
					{allGenres.map((genre) => (
						<li key={genre.id}>
							<input
								type={"checkbox"}
								checked={selectedGenres.includes(genre)}
								onChange={() => toggleSelectedGenre(genre)}
							/>
							<p>{genre.name}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Filters;
