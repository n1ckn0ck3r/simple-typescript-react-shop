import { createSlice } from "@reduxjs/toolkit";
import { fetchGoods } from "./asyncActions";
import { GameState, Status } from "./types";

const initialState: GameState = {
	games: [],
	status: Status.LOADING,
};

export const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGoods.pending, (state): void => {
			state.status = Status.LOADING;
			state.games = [];
		});

		builder.addCase(fetchGoods.fulfilled, (state, action): void => {
			state.games = action.payload;
			state.status = Status.SUCCESS;
		});

		builder.addCase(fetchGoods.rejected, (state): void => {
			state.status = Status.ERROR;
			state.games = [];
		});
	},
});
export default gamesSlice.reducer;
