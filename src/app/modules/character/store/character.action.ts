import { createAction, props } from "@ngrx/store";
import { Character } from "./models/characters";

export const loadCharacters = createAction('[CHARACTER] get character list',
    props<{ characters: Character[] }>()
);

export const deleteCharacter = createAction('[CHARACTER] delete character',
    props<{ id: number }>()
)