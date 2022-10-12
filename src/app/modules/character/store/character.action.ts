import { Action } from "@ngrx/store";
import { ICharacter } from "../characters.interface";

export enum characterActionsType {
    getCharacter = '[CHARACTER] get character list'
}

export class characterCreateAction implements Action {
    readonly type = characterActionsType.getCharacter

    constructor(public payload:ICharacter[]) {

    }
}
export type characterAction = characterCreateAction;