import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpReq } from 'src/app/http/http';
import { getLocationsList } from './store/locations.actions';



@Injectable()
export class LocationsService {
    constructor(private store$: Store<{ charactersList: [] }>,
        private httpReq: HttpReq) {
    }
    getList() {
        this.httpReq.getLocationsList().subscribe((res: any) => {
            if (res?.results?.length) {
                const { info, results } = res;
                this.store$.dispatch(getLocationsList({ data: results }));
            }
        })
    }
}
