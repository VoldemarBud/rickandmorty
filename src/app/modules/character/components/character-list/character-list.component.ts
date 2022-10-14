import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICharacter } from '../../characters.interface';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  characters: ICharacter[] = [];

  constructor(private store$: Store<any>) {
    this.store$.select('characters').subscribe(data => {
      this.characters = data.charactersList
    });
  }

}

