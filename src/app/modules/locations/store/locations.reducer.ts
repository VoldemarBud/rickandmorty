import { createReducer, on } from "@ngrx/store";
import { ILocations } from "../locations.interface";
import { deleteLocation, getLocationsList } from "./locations.actions";

export const LOCATIONS_REDUCER_NODE = 'locations';


export interface LocationsState {
    locationsList: ILocations[] | [],
    location?: ILocations | {}
}
const initialLocationsState: LocationsState = {
    locationsList: []
}


export const locationsReducer = createReducer(
    initialLocationsState,
    on(getLocationsList, (state, { data }) => ({
        ...state,
        locationsList: data
    })),
    on(deleteLocation, (state, { index }) => ({
        ...state,
        locationsList: state.locationsList.filter((element, i) => {
            if (i != index) {
                return true;
            }
            return false
        }),
    }))
) 