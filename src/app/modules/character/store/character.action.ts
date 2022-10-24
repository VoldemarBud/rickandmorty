import { createAction, props } from "@ngrx/store";
import { Character } from "./models/characters";

export const CharactersLoad = createAction('[CHARACTER] Load character list'
);

export const CharactersLoadedSuccess = createAction('[CHARACTER] Characters Loaded Success ',
    props<{ characters: Character[] }>()
);

export const DeleteCharacter = createAction('[CHARACTER] delete character',
    props<{ id: number }>()
)