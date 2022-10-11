import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpReq } from 'src/app/http/http';
import { ICharacter } from '../../characters.interface';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  id!: number;
  private sub: any;
  character: ICharacter | null = null;
  constructor(private httpReq: HttpReq, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(param => {
      this.id = +param['id']
    })   
    this.getCharacter()
  }
  getCharacter() {
    this.httpReq.getCharacter(this.id).subscribe((res: any) => {
      this.character = res;
      console.log(this.character)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
