import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCharactersList } from '../../store/character.selector';
import { Character } from '../../store/models/characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent  {
  characters$: Observable<Character[]> = this.store.select(getCharactersList)

  constructor(private store: Store) {
  }
 
}

