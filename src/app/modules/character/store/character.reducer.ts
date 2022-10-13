
import { ICharacter } from "../characters.interface";
import { deleteCharacter, getCharacter, getCharacterList, setNewCharacterInfo } from "./character.action";
import { createReducer, on } from '@ngrx/store';

export const CHARACTER_REDUCER_NODE = 'characters';

export interface charactersState {
    charactersList: ICharacter[] | [],
    character?: ICharacter | {}
}
const initialCharactersState: charactersState = {
    charactersList: []
}

export const charactersReducer = createReducer(
    initialCharactersState,
    on(getCharacterList, (state, { data }) => ({
        ...state,
        charactersList: data
    })),
    on(getCharacter, (state, { index }) => ({
        ...state,
        character: state.charactersList[index]
    })),

    on(setNewCharacterInfo, (state, { data, index }) => {
        return ({
            ...state,
            charactersList: state.charactersList.map((element, i) => {
                if (i == index) {
                    return element = data
                }
                return element
            }),
            character: data
        })
    }),
    on(deleteCharacter, (state, { index }) => ({
        ...state,
        charactersList: state.charactersList.filter((element, i) => {
            if (i != index) {
                return true;
            }
            return false
        }),
    }))
);