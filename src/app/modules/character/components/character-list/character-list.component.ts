
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { HttpReq } from 'src/app/http/http';
import { ICharacter } from '../../characters.interface';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {


  characters: ICharacter[] = []

  constructor(private httpReq: HttpReq) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.httpReq.getCharacterList().subscribe((res: any) => {
      if (res?.results?.length) {
        const { info, results } = res;
        this.characters = [...this.characters, ...results]
      } else {
        this.characters = [];
      }
    })
  }
}

