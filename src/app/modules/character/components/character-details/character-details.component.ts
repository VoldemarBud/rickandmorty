import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { ICharacter } from '../../characters.interface';
import { deleteCharacter, getCharacter, setNewCharacterInfo } from '../../store/character.action';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  index!: number;
  private sub: any;
  character!: ICharacter

  constructor(private store$: Store<any>,private router:Router, private route: ActivatedRoute,
    public dialog: MatDialog) {
    this.store$.select('characters').subscribe(data => {
      this.character = data.character
    });

  }


  ngOnInit(): void {
    this.loadCharacter();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadCharacter() {
    this.sub = this.route.params.subscribe(param => {
      this.index = +param['id']
    })
    this.store$.dispatch(getCharacter({ index: this.index }));
  }

  saveChange(data: any) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let { name, status, species, gender, created, locationName } = data

        this.character = {
          id: this.character.id,
          name: `${name.value}`,
          status: `${status.value}`,
          species: `${species.value}`,
          gender: `${gender.value}`,
          image: this.character.image,
          location: {
            name: `${locationName.value}`,
            url: this.character.location.url
          },
          created: `${created.value}`,

        }


        this.store$.dispatch(setNewCharacterInfo({ data: this.character, index: this.index }));

      }
    });
  }

  deleteCharacterElement() {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store$.dispatch(deleteCharacter({ index: this.index }));
        this.router.navigate(['/']);
      }
    })
  }
}
