import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HttpReq {
    readonly characterUrl = 'https://rickandmortyapi.com/api/character/';
    readonly locationUrl = 'https://rickandmortyapi.com/api/location';

    constructor(private http: HttpClient) { }


    getCharacterList() {
        return this.http.get(this.characterUrl).pipe()
    }

    getCharacter(id: number) {
        return this.http.get(`${this.characterUrl}/${id}`)
    }

    getLocationsList() {
        return this.http.get(this.locationUrl).pipe()
    }
}