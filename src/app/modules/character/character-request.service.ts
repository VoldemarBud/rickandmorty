import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpReq } from 'src/app/http/http';
import { getCharacters } from './store/character.action';



@Injectable()
export class CharacterRequestService {
    constructor(private store$: Store<{ charactersList: [] }>,
        private httpReq: HttpReq) {
    }
    getList() {
        this.httpReq.getCharacters().subscribe((res: any) => {
            if (res?.results?.length) {
                const { info, results } = res;
                this.store$.dispatch(getCharacters({ data: results }));
            }
        })
    }
}