
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpReq } from './http/http';
import { ICharacter } from './modules/character/characters.interface';
import { characterCreateAction } from './modules/character/store/character.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characters!: ICharacter[]

  constructor(private store$: Store, private httpReq: HttpReq) {

  }
  ngOnInit(): void {

    this.httpReq.getCharacterList().subscribe((res: any) => {
      if (res?.results?.length) {
        const { info, results } = res;
        this.characters = [...results]
      } else {
        this.characters = [];
      }
    })


    this.store$.dispatch(new characterCreateAction(this.characters))


  }




}
