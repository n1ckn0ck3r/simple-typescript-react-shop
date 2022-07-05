import { createAsyncThunk } from "@reduxjs/toolkit";
import { Game } from "./types";

export const fetchGoods = createAsyncThunk<Game[]>(
	"good/fetchGoods",
	async (): Promise<Game[]> => {
		const responce = await fetch(
			"https://62c1a3bd2af60be89ecb141b.mockapi.io/goods"
		);

		return responce.json();
	}
);
