import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LocationsRequestService {
    readonly locationUrl = 'https://rickandmortyapi.com/api/location';

    constructor(
        private httpReq: HttpClient) {
    }
    getLocationsList() {
        return this.httpReq.get(this.locationUrl)
    }
}
