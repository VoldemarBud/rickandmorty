import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharactersState } from '../../store/character.reducer';
import { getCharacters } from '../../store/character.selector';
import { Character } from '../../store/models/characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]> = this.store$.pipe(
    select(getCharacters)
  )

  constructor(private store$: Store<CharactersState>) {
  }
  ngOnInit(): void {
    // this.characters$ =  this.store$.select(getCharacters)
  }
  
}

