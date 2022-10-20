import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpReq } from 'src/app/http/http';
import { getCharacterList } from './store/character.action';



@Injectable()
export class CharacterRequestService {
    constructor(private store$: Store<{ charactersList: [] }>,
        private httpReq: HttpReq) {
    }
    getList() {
        this.httpReq.getCharacterList().subscribe((res: any) => {
            if (res?.results?.length) {
                const { info, results } = res;
                this.store$.dispatch(getCharacterList({ data: results }));
            }
        })
    }
}