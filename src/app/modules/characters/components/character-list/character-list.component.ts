import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Character } from 'src/app/shared/interfaces/characters.interface';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  private pageNum = 1;
  private query: string = '';
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private characterSvc: CharacterService
  ) {

  }

  ngOnInit(): void {
    this.getDataFromService()
  }


  private getDataFromService(): void {
    this.characterSvc.getCharactersList().pipe(
      take(1)
    ).subscribe((res: any) => {
      if (res?.results?.length) {
        const { info, results } = res;
        this.characters = [...this.characters, ...results]
      } else {
        this.characters = [];
      }
    })
  }
}
