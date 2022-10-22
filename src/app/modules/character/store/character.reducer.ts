
import { Character } from "./modules/characters";
import { deleteCharacter, loadCharacters } from "./character.action";
import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const CHARACTER_REDUCER_NODE = 'characters';
//Entity State
export interface CharactersState extends EntityState<Character> {}

export const charactersAdapter: EntityAdapter<Character> = createEntityAdapter<Character>();

export const initialCharactersState: CharactersState = charactersAdapter.getInitialState();
//Entity State

export const charactersReducer = createReducer(
    initialCharactersState,
    on(loadCharacters, (state, { characters }) => {
        return charactersAdapter.setAll(characters, state)
    }),
    on(deleteCharacter, (state, { id }) => {
        return charactersAdapter.removeOne(id, state)
    }),
);
