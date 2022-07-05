import { RootState } from "../store";
import { FilterState, Genre } from "./types";

export const selectFilter = (state: RootState): FilterState => state.filter;
export const selectSelectedGenres = (state: RootState): Genre[] =>
	state.filter.selectedGenres;
