import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HttpReq {
    readonly characterUrl = 'https://rickandmortyapi.com/api/character/';

    constructor(private http: HttpClient) { }


    getCharacterList() {
        return this.http.get(this.characterUrl).pipe(
            take(1)
        )
    }

    getCharacter(id: number) {
        return this.http.get(`${this.characterUrl}/${id}`)
    }
}