
import { Character } from "./modules/characters";
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { CharactersActions, CharactersActionTypes } from "./character.action";
export const CHARACTER_REDUCER_NODE = 'characters';

export interface CharactersState {
    charactersList: Character[] | []
}
const initialCharactersState: CharactersState = {
    charactersList: []
}

const defaultCharacters = {
    ids: [],
    entities: {


    }
}



export const charactersAdapter = createEntityAdapter<Character>();

export interface State extends EntityState<Character> {
}
export const initialCharactersStateE: State = charactersAdapter.getInitialState();


// export const charactersReducer = createReducer(
//     initialCharactersState,
//     on(GetCharacterList, (state, { data }) => ({
//         ...state,
//         charactersList: data
//     })),
//     on(getCharacter, (state, { id }) => ({
//         ...state,
//         character: state.charactersList[id]
//     })),

//     on(deleteCharacter, (state, { id }) => ({
//         ...state,
//         charactersList: state.charactersList.filter((element) => {
//             if (element.id != id) {
//                 return true;
//             }
//             return false
//         }),
//     }))
// );

export function charactersReducer(
    state: State = initialCharactersStateE,
    action: CharactersActions
) {
    switch (action.type) {
        case CharactersActionTypes.LoadCharacters:
            return charactersAdapter.addMany(action.payload.charactersList, state);
        case CharactersActionTypes.DeleteCharacter:
            return charactersAdapter.removeOne(action.payload.id, state)
        default:
            return state
    }
}

export const getCharacterState = createFeatureSelector<State>(CHARACTER_REDUCER_NODE);