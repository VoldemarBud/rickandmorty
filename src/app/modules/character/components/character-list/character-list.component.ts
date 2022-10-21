import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCharacters } from '../../store/character.selector';
import { Character } from '../../store/modules/characters';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  characters$: Observable<Character[]>

  constructor(private store$: Store<any>) {
    this.characters$ = this.store$.select(getCharacters)
  }
   // this.store$.select('characters').subscribe(data => {
    //   this.characters = data.charactersList
    // });
}

