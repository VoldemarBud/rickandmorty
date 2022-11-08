import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { DeleteCharacter } from '../../store/character.action';
import { CharacterRequestService } from '../../store/character-request.service';
import { map, Observable, switchMap } from 'rxjs';
import { Character } from '../../store/models/characters';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  id$ = this.route.params.pipe(map((params: Params) => params['id']))

  character$: Observable<Character|any> = this.id$.pipe(
    switchMap((id: string) => this.charactersService.getCharacter(id))
  )
  constructor(private store$: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private charactersService: CharacterRequestService) {
  }


  deleteCharacterElement() {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.character$.subscribe(
          character => this.store$.dispatch(
            DeleteCharacter({ id: character.id })
          )
        )
        this.router.navigate(['/']);
      }
    })
  }
}