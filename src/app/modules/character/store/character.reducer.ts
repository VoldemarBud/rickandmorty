
import { ICharacter } from "../characters.interface";
import { characterAction, characterActionsType } from "./character.action";
import { INITIAL_STATE } from '@ngrx/store';
export const CHARACTER_REDUCER_NODE = 'characters';

export interface charactersState {
    charactersList: ICharacter[],
    character: ICharacter | {}
}
const initialCharactersState: charactersState = {
    charactersList: [],
    character: {}
}

export const charactersReducer = (state = initialCharactersState,
    action: characterAction) => {
    switch (action.type) {
        case characterActionsType.getCharacter:
            return {
                ...state,
                charactersList: [...state.charactersList]
            }
        default:
            return state;
    }
}