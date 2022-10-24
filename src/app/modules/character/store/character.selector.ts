import { createFeatureSelector, createSelector } from "@ngrx/store";
import { charactersAdapter, CHARACTER_REDUCER_NODE, CharactersState } from "./character.reducer";

export const getCharactersState = createFeatureSelector<CharactersState>(CHARACTER_REDUCER_NODE);

const charactersSelectors = charactersAdapter.getSelectors();

export const getCharactersList = createSelector(getCharactersState, charactersSelectors.selectAll)

export const getCharactersEntities = createSelector(getCharactersState, charactersSelectors.selectEntities)