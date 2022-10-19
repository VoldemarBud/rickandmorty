import { createAction, props } from "@ngrx/store";
import { Locations } from "./modules/locations";


export const getLocationsList = createAction('[LOCATIONS] get locations list',
    props<{ data: Locations[] }>()
);
export const addNewLocation = createAction('[LOCATIONS] add new location to list',
    props<{ data:Locations }>()
);

export const deleteLocation = createAction('[LOCATIONS] delete location',
    props<{ id: number }>()
)
