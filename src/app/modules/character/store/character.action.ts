import { createAction, props } from "@ngrx/store";
import { ICharacter } from "../characters.interface";

export const getCharacterList = createAction('[CHARACTER] get character list',
    props<{ data: ICharacter[] }>()
);

export const getCharacter = createAction('[CHARACTER] get character',
    props<{ index: number }>()
);

export const setNewCharacterInfo = createAction('[CHARACTER] set new character info',
    props<{ data: ICharacter,index: number }>()
);

export const deleteCharacter = createAction('[CHARACTER] delete character',
    props<{ index: number }>()
)
