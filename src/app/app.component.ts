
import { Component, OnInit } from '@angular/core';

import { CharacterRequestService } from './modules/character/character-request.service';
import { LocationsRequestService } from './modules/locations/locations-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharacterRequestService, LocationsRequestService]
})
export class AppComponent implements OnInit {


  constructor(private characterService: CharacterRequestService, private locationsService: LocationsRequestService) {
  }
  ngOnInit(): void {
    this.characterService.getList();
    this.locationsService.getList();
  }
}
