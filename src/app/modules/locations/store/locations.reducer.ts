import { createReducer, on } from "@ngrx/store";
import { Locations } from "./models/locations";
import { addNewLocation, deleteLocation, getLocationsList } from "./locations.actions";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export const LOCATIONS_REDUCER_NODE = 'locations';

export interface LocationsState extends EntityState<Locations> { }

export const locationsAdapter: EntityAdapter<Locations> = createEntityAdapter<Locations>();


export const initialLocationsState: LocationsState = locationsAdapter.getInitialState();

export const locationsReducer = createReducer(
    initialLocationsState,
    on(getLocationsList, (state, { data }) => {
        return locationsAdapter.setAll(data, state)
    }),
    on(deleteLocation, (state, { id }) => {
        return locationsAdapter.removeOne(id, state)
    }),
    on(addNewLocation, (state, { data }) => {
        return locationsAdapter.addOne(data, state);
    }),
);