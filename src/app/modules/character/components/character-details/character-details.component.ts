import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { HttpReq } from 'src/app/http/http';
import { Character } from '../../store/modules/characters';
import { deleteCharacter } from '../../store/character.action';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnDestroy {
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
    this.sub = this.route.params.subscribe(params => {

      this.httpReq.getCharacter(params['id']).subscribe((res: any) => {
        if (res) {
          this.character = res;
        }
      })
    })
  }

  deleteCharacterElement(id: number) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store$.dispatch(deleteCharacter({ id }));
        this.router.navigate(['/']);
      }
    })
  }
}
function details(id: string): any {
  throw new Error('Function not implemented.');
}

