import { createAction, props } from "@ngrx/store";
import { ILocations } from "../locations.interface";


export const getLocationsList = createAction('[LOCATIONS] get locations list',
    props<{ data: ILocations[] }>()
);

export const deleteLocation = createAction('[LOCATIONS] delete character',
    props<{ index: number }>()
)
