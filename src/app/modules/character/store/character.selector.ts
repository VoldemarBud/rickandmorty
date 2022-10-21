import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CharactersState, CHARACTER_REDUCER_NODE } from "./character.reducer";

export const getCharactersState = createFeatureSelector<CharactersState>(CHARACTER_REDUCER_NODE);

export const getCharacters = createSelector(getCharactersState, (state) => {
    return state.charactersList
})