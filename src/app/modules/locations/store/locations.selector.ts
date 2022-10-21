import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LocationsState, LOCATIONS_REDUCER_NODE } from "./locations.reducer";

export const getLocationsState = createFeatureSelector<LocationsState>(LOCATIONS_REDUCER_NODE);

export const getLocations = createSelector(getLocationsState, (state) => {
    return state.locationsList
})