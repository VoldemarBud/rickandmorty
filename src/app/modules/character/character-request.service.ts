import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpReq } from 'src/app/http/http';
import { loadCharacters } from './store/character.action';
import { map } from 'rxjs';
import { Character } from './store/models/characters';


@Injectable()
export class CharacterRequestService {
    constructor(private store$: Store<{ charactersList: [] }>,
        private httpReq: HttpReq) {
    }
    getList() {

        // this.httpReq.getCharacters().pipe(
        //     map((data: any) => {
        //         const characters: Character[] = [];
        //         for (let key in data) {
        //             characters.push({ ...data[key], id: key });
        //         }
        //         return characters;
        //     })
        // );
        this.httpReq.getCharacters().subscribe((res: any) => {
            if (res?.results?.length) {
                const { info, results } = res;
                this.store$.dispatch(loadCharacters({ characters: results }));
            }
        })
    }
}