import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGoods } from "./asyncActions";
import { Game, GameState, Status } from "./types";

const initialState: GameState = {
	games: [],
	status: Status.LOADING,
};

export const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchGoods.pending.type]: (state) => {
			state.status = Status.LOADING;
			state.games = [];
		},
		[fetchGoods.fulfilled.type]: (state, action: PayloadAction<Game[]>) => {
			state.games = action.payload;
			state.status = Status.SUCCESS;
		},
		[fetchGoods.rejected.type]: (state) => {
			state.status = Status.ERROR;
			state.games = [];
		},
	},
});
export default gamesSlice.reducer;
