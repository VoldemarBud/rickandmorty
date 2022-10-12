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
    if (!this.character) {
      this.sub = this.route.params.subscribe(param => {
        this.id = +param['id']
      })
      this.getCharacter(this.id)
    }
  }

  getCharacter(id: number) {
    this.httpReq.getCharacter(id).subscribe((res: any) => {
      this.character = res;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  saveChange(data: any) {
    this.character!.name = data.name.value;
    this.character!.status = data.status.value;
    this.character!.species = data.species.value;
    this.character!.gender = data.gender.value;
    this.character!.created = data.created.value;
    this.character!.location!.name = data.locationName.value;
  }
}
