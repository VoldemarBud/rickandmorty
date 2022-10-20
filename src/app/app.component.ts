
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpReq } from './http/http';

import { getCharacterList } from './modules/character/store/character.action';
import { getLocationsList } from './modules/locations/store/locations.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private store$: Store<{ charactersList: [] }>,
    private httpReq: HttpReq) {
  }
  ngOnInit(): void {
    this.httpReq.getCharacterList().subscribe((res: any) => {
      if (res?.results?.length) {
        const { info, results } = res;
        this.store$.dispatch(getCharacterList({ data: results }));
      }

      this.httpReq.getLocationsList().subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.store$.dispatch(getLocationsList({ data: results }));
        }
      })
    })
  }
}
