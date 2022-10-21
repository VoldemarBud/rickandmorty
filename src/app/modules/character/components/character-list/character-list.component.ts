import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllCharacters, State } from '../../store/character.reducer';
import { getCharacters } from '../../store/character.selector';
import { Character } from '../../store/modules/characters';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]>

  constructor(private store$: Store<State>) {

  }
  // this.store$.select('characters').subscribe(data => {
  //   this.characters = data.charactersList
  // });

  ngOnInit(): void {
    this.characters$ = this.store$.select(selectAllCharacters)
  }
}

