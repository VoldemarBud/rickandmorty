import { createAction, props } from "@ngrx/store";
import { ILocations } from "../locations.interface";


export const getLocationsList = createAction('[LOCATIONS] get locations list',
    props<{ data: ILocations[] }>()
);
export const addNewLocation = createAction('[LOCATIONS] add new location to list',
    props<{ data: ILocations }>()
);

export const deleteLocation = createAction('[LOCATIONS] delete location',
    props<{ index: number }>()
)
