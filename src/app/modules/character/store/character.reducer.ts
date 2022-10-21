
import { Character } from "./modules/characters";
import { deleteCharacter, getCharacter, getCharacterList, setNewCharacterInfo } from "./character.action";
import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const CHARACTER_REDUCER_NODE = 'characters';

export interface CharactersState {
    charactersList: Character[] | [],
    character?: Character | {}
}
const initialCharactersState: CharactersState = {
    charactersList: []
}
// '@ngrx/entity' ============================================
export interface State extends EntityState<Character> {
    // additional entities state properties
    selectedCharacterId: string | null;
}
export const adapter: EntityAdapter<Character> = createEntityAdapter<Character>();

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    selectedCharacterId: null,
});

// '@ngrx/entity' ============================================
export const charactersReducer = createReducer(
    initialState,
    on(getCharacterList, (state, { characters }) => {
        return adapter.setAll(characters, state)
    }),
    on(deleteCharacter, (state, { id }) => {
        return adapter.removeOne(id, state)
    }),
);

export const getSelectedCharactersId = (state: State) => state.selectedCharacterId;

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
  } = adapter.getSelectors();
   
  // select the array of user ids
  export const selectUserIds = selectIds;
   
  // select the dictionary of user entities
  export const selectUserEntities = selectEntities;
   
  // select the array of users
  export const selectAllCharacters = selectAll;

  
// export const charactersReducer = createReducer(
//     initialCharactersState,
//     on(getCharacterList, (state, { characters }) => ({
//         ...state,
//         charactersList: characters
//     })),
//     on(getCharacter, (state, { id }) => ({
//         ...state,
//         character: state.charactersList[id]
//     })),

//     on(setNewCharacterInfo, (state, { data }) => {
//         return ({
//             ...state,
//             charactersList: state.charactersList.map((element) => {
//                 if (element.id == data.id) {
//                     return element = data
//                 }
//                 return element
//             }),
//             character: data
//         })
//     }),
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