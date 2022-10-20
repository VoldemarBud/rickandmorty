import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Character } from '../../store/modules/characters';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  characters: Character[] = [];

  constructor(private store$: Store<any>) {
    this.store$.select('characters').subscribe(data => {
      this.characters = data.charactersList
    });
  }

}

