import { Action, createAction, props } from "@ngrx/store";
import { Character } from "./modules/characters";

export enum CharactersActionTypes {
    LoadCharacters = '[CHARACTERS] Load CharacterS',
    DeleteCharacter = '[CHARACTERS] Delete CHARACTER',
}

// createAction('[CHARACTER] get character list',
// props<{ data: Character[] }>()
// );

export class LoadCharacterList implements Action {
    readonly type = CharactersActionTypes.LoadCharacters;
    constructor(public payload: { charactersList: Character[] }) { }
}

export class DeleteCharacter implements Action {
    readonly type = CharactersActionTypes.DeleteCharacter;

    constructor(public payload: { id: string }) { }
}
// export const getCharacter = createAction('[CHARACTER] get character',
//     props<{ id: number }>()
// );

// export const deleteCharacter = createAction('[CHARACTER] delete character',
//     props<{ id: number }>()
// )


export type CharactersActions = LoadCharacterList | DeleteCharacter