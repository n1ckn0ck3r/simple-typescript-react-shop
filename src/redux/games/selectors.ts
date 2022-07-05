import { RootState } from "../store";
import { GameState } from "./types";

export const selectGamesState = (state: RootState): GameState => state.games;
