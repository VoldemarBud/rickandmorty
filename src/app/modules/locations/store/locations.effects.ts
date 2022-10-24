import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs";
import { LocationsRequestService } from "../locations-request.service";

import { LocationsLoad, LocationsLoadedSuccess } from "./locations.actions";
import { } from "./locations.selector";


@Injectable()
export class LocationsEffect {
    @Effect({dispatch: false})
    loadArticles$ = this.actions$.pipe(
        ofType(LocationsLoad),
        mergeMap(() =>
            this.locationsService.getList().pipe(
                map((res: any) => {
                    if (res?.results?.length) {
                        const { info, results } = res;
                        this.store$.dispatch(LocationsLoadedSuccess({ locations: results }));
                    }
                })
            )
        )
    );

    constructor(
        private actions$: Actions,
        private locationsService: LocationsRequestService,
        private store$: Store<{ locationsList: [] }>,
    ) { }
}



