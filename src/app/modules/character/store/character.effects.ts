import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, mergeMap, of, withLatestFrom } from "rxjs";
import { CharacterRequestService } from "../character-request.service";
import { loadCharacters } from "./character.action";
import { getCharacters } from "./character.selector";


@Injectable()
export class CharactersEffects {
    constructor(private actions$: Actions, private characterService: CharacterRequestService, private store$: Store<{ charactersList: [] }>) { }

    charactersLoad$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadCharacters),
            withLatestFrom(this.store$.select(getCharacters)),
  
                 this.characterService.getList().pipe(
                    map((characters) => {
                        return loadCharacters({ characters });
                    })
                )

        
        );
    });


}


