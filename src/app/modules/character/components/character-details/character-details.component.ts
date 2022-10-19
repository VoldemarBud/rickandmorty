import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { HttpReq } from 'src/app/http/http';
import { Character } from '../../store/modules/characters';
import { deleteCharacter, getCharacter, setNewCharacterInfo } from '../../store/character.action';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnDestroy {
  id: number;
  private sub: any;
  character: Character

  constructor(private store$: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private httpReq: HttpReq) {

    this.loadCharacter();
  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadCharacter() {
    this.sub = this.route.params.subscribe(param => {
 
    this.httpReq.getCharacter(+param['id']).subscribe((res: any) => {
      if (res) {
        this.character = res;
      }
    })

  })
  }

  saveChange(data: any) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let { name, status, species, gender, created, locationName } = data

        const character = {
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
        this.store$.dispatch(setNewCharacterInfo({ data: character }));

      }
    });
  }

  deleteCharacterElement() {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store$.dispatch(deleteCharacter({ id: this.id }));
        this.router.navigate(['/']);
      }
    })
  }
}
