import { createAction, props } from "@ngrx/store";
import { Locations } from "./models/locations";

export const LocationsLoad = createAction('[CHARACTER] Load location list'
);

export const LocationsLoadedSuccess = createAction('[LOCATIONS]Locations Loaded Success',
    props<{ locations: Locations[] }>()
);

export const addNewLocation = createAction('[LOCATIONS] add new location to list',
    props<{ locations:Locations }>()
);

export const deleteLocation = createAction('[LOCATIONS] delete location',
    props<{ id: number }>()
)
