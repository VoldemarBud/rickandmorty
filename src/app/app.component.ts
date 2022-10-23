
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CharacterRequestService } from './modules/character/character-request.service';
import { loadCharacters } from './modules/character/store/character.action';
import { LocationsRequestService } from './modules/locations/locations-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharacterRequestService, LocationsRequestService]
})
export class AppComponent implements OnInit {


  constructor(private store$: Store<{ charactersList: [] }>, private characterService: CharacterRequestService,
    private locationsService: LocationsRequestService) {
  }
  ngOnInit(): void {
    // this.characterService.getList();
    // .subscribe((result) => this.store$.dispatch(loadCharacters({ characters: result })) );
    this.locationsService.getList();
  }
}
