export type Genre = {
	id: number;
	name: string;
};

export interface FilterState {
	allGenres: Genre[];
	selectedGenres: Genre[];
}
