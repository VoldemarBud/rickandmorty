import { createReducer, on } from "@ngrx/store";
import { Locations } from "./modules/locations";
import { addNewLocation, deleteLocation, getLocationsList } from "./locations.actions";

export const LOCATIONS_REDUCER_NODE = 'locations';


export interface LocationsState {
    locationsList: Locations[] | [],
    location?: Locations | {}
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
    on(addNewLocation, (state, { data }) => ({
        ...state,
        locationsList: [...state.locationsList, data]
    })),
    on(deleteLocation, (state, { id }) => ({
        ...state,
        locationsList: state.locationsList.filter((element, i) => {
            if (element.id != id) {
                return true;
            }
            return false
        }),
    }))
) 