import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, Genre } from "./types";

const genres: Genre[] = [
	{ id: 0, name: "Аркада и ритм-игра" },
	{ id: 1, name: "Платформер и раннер" },
	{ id: 2, name: "Шутер от первого лица" },
	{ id: 3, name: "Шутер от третьего лица" },
	{ id: 4, name: "Казуальная игра" },
	{ id: 5, name: "Метроидвания" },
	{ id: 6, name: "Пошаговая ролевая игра" },
	{ id: 7, name: "Жизнь и иммерсивные игры" },
	{ id: 8, name: "Песочницы и физика" },
	{ id: 9, name: "Фермерство и крафтинг" },
	{ id: 10, name: "Военная стратегия" },
	{ id: 11, name: "Города и колонизация" },
	{ id: 12, name: "Карточная и настольная игра" },
	{ id: 13, name: "Гонки" },
	{ id: 14, name: "Командный спорт" },
	{ id: 15, name: "Охота и рыбалка" },
];

const initialState: FilterState = {
	allGenres: genres,
	selectedGenres: genres,
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		addSelectedGenre: (state, action: PayloadAction<Genre>): void => {
			state.selectedGenres = [...state.selectedGenres, action.payload];
		},
		addAllGenresToSelected: (state): void => {
			state.selectedGenres = state.allGenres;
		},
		removeSelectedGenre: (state, action: PayloadAction<Genre>): void => {
			state.selectedGenres = state.selectedGenres.filter(
				(genre) => genre.id !== action.payload.id
			);
		},
		removeAllGenresFromSelected: (state): void => {
			state.selectedGenres = [];
		},
	},
});

export const {
	addSelectedGenre,
	addAllGenresToSelected,
	removeSelectedGenre,
	removeAllGenresFromSelected,
} = filterSlice.actions;
export default filterSlice.reducer;
