
import { Component, OnInit } from '@angular/core';

import { CharacterService } from './modules/character/character.service';
import { LocationsService } from './modules/locations/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharacterService, LocationsService]
})
export class AppComponent implements OnInit {


  constructor(private characterService: CharacterService, private locationsService: LocationsService) {
  }
  ngOnInit(): void {
    this.characterService.getList();
    this.locationsService.getList();
  }
}
