
import { Character } from "./modules/characters";
import { deleteCharacter, getCharacter, getCharacterList, setNewCharacterInfo } from "./character.action";
import { createReducer, on } from '@ngrx/store';

export const CHARACTER_REDUCER_NODE = 'characters';

export interface CharactersState {
    charactersList: Character[] | [],
    character?: Character | {}
}
const initialCharactersState: CharactersState = {
    charactersList: []
}

export const charactersReducer = createReducer(
    initialCharactersState,
    on(getCharacterList, (state, { data }) => ({
        ...state,
        charactersList: data
    })),
    on(getCharacter, (state, { id }) => ({
        ...state,
        character: state.charactersList[id]
    })),

    on(setNewCharacterInfo, (state, { data}) => {
        return ({
            ...state,
            charactersList: state.charactersList.map((element, i) => {
                if (element.id == data.id) {
                    return element = data
                }
                return element
            }),
            character: data
        })
    }),
    on(deleteCharacter, (state, { id }) => ({
        ...state,
        charactersList: state.charactersList.filter((element, i) => {
            if (element.id != id) {
                return true;
            }
            return false
        }),
    }))
);