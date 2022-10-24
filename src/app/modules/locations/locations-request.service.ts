import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpReq } from 'src/app/http/http';



@Injectable()
export class LocationsRequestService {
    constructor(
        private httpReq: HttpReq) {
    }
    getList() {
        return this.httpReq.getLocationsList();
    }
}
