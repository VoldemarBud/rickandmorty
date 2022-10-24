import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { HttpReq } from 'src/app/http/http';
import { Character } from '../../store/models/characters';
import { DeleteCharacter } from '../../store/character.action';
import { CharacterRequestService } from '../../character-request.service';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  id$ = this.route.params.pipe(map((params: any) => params['id']))
  
  character$: Observable<any> = this.id$.pipe(
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



