import { createAction, props } from "@ngrx/store";
import { Character } from "./modules/characters";

export const getCharacters = createAction('[CHARACTER] get character list',
    props<{ characters: Character[] }>()
);

export const getCharacter = createAction('[CHARACTER] get character',
    props<{ id: number }>()
);

export const setNewCharacterInfo = createAction('[CHARACTER] set new character info',
    props<{ data: Character }>()
);

export const deleteCharacter = createAction('[CHARACTER] delete character',
    props<{ id: number }>()
)