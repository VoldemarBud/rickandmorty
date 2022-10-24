import { Injectable } from '@angular/core';
import { HttpReq } from 'src/app/http/http';


@Injectable()
export class CharacterRequestService {
    constructor(
        private httpReq: HttpReq) {
    }
    getList() {
        return this.httpReq.getCharacters();
     }
}