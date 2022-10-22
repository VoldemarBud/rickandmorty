import { createFeatureSelector, createSelector } from "@ngrx/store";
import { locationsAdapter, LocationsState, LOCATIONS_REDUCER_NODE } from "./locations.reducer";

export const getLocationsState = createFeatureSelector<LocationsState>(LOCATIONS_REDUCER_NODE);
const locationsSelectors = locationsAdapter.getSelectors();

export const getLocations = createSelector(getLocationsState, locationsSelectors.selectAll)

export const getLocationsEntities = createSelector(getLocationsState, locationsSelectors.selectEntities)