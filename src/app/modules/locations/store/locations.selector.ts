import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LocationsState, LOCATIONS_REDUCER_NODE } from "./locations.reducer";

export const getCharactersState = createFeatureSelector<LocationsState>(LOCATIONS_REDUCER_NODE);

export const getCharacters = createSelector(getCharactersState, (state) => {
    return state.locationsList
})