import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HttpReq {
    readonly characterUrl = 'https://rickandmortyapi.com/api/character/';
    readonly locationUrl = 'https://rickandmortyapi.com/api/location';

    constructor(private http: HttpClient) { }


    getCharacters() {
        return this.http.get(this.characterUrl)
    }

    getCharacter(id: string) {
        return this.http.get(`${this.characterUrl}/${id}`)
    }

    getLocationsList() {
        return this.http.get(this.locationUrl)
    }
}