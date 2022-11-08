import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs";
import { LocationsRequestService } from "./locations-request.service";

import { LocationsLoad, LocationsLoadedSuccess } from "./locations.actions";
import { } from "./locations.selector";


@Injectable()
export class LocationsEffect {

    loadLocations$ = createEffect(
        () => this.actions$.pipe(
            ofType(LocationsLoad),
            mergeMap(() =>
                this.locationsService.getLocationsList().pipe(
                    map((res: any) => {
                        if (res?.results?.length) {
                            const { info, results } = res;
                            this.store$.dispatch(LocationsLoadedSuccess({ locations: results }));
                        }
                    })
                )
            )
        ), { dispatch: false })

    constructor(
        private actions$: Actions,
        private locationsService: LocationsRequestService,
        private store$: Store<{ locationsList: [] }>,
    ) { }
}



