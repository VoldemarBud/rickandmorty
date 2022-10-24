
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharactersLoad } from './modules/character/store/character.action';
import { LocationsLoad } from './modules/locations/store/locations.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private store: Store) {
    this.store.dispatch(CharactersLoad());
    this.store.dispatch( LocationsLoad());
  }
}
