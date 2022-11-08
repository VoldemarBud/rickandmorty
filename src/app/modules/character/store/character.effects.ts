import { Injectable } from "@angular/core";
import { Actions, createEffect,  ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs";
import { CharacterRequestService } from "./character-request.service";
import { CharactersLoad, CharactersLoadedSuccess } from "./character.action";
import { } from "./character.selector";


@Injectable()
export class CharactersEffects {

    loadCharacters$ =
        createEffect(
            () => this.actions$.pipe(
                ofType(CharactersLoad),
                mergeMap(() =>
                    this.charactersService.getList().pipe(
                        map((res: any) => {
                            if (res?.results?.length) {
                                const { info, results } = res;
                                this.store$.dispatch(CharactersLoadedSuccess({ characters: results }));
                            }
                        })
                    )
                )
            ), { dispatch: false }
        );


    constructor(
        private actions$: Actions,
        private charactersService: CharacterRequestService,
        private store$: Store<{ charactersList: [] }>
    ) { }
}



