import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CharacterRequestService {
    readonly characterUrl = 'https://rickandmortyapi.com/api/character/';
    constructor(
        private httpReq: HttpClient) {
    }
    getCharactersList() {
        return this.httpReq.get(this.characterUrl)
    }

    getCharacter(id: string|number) {
        return this.httpReq.get(`${this.characterUrl}/${id}`)
    }
}