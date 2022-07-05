export type Game = {
	id: number;
	title: string;
	image: string;
	price: number;
	genre: string;
	publisher: string;
	releaseYear: number;
};

export enum Status {
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}

export interface GameState {
	games: Game[];
	status: Status;
}

export type SearchGamesParams = {
	genres: string;
};
