import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { DialogFormLocationComponent } from 'src/app/components/dialog-form-location/dialog-form-location.component';
import { DialogLocationInfoComponent } from 'src/app/components/dialog-location-info/dialog-location-info.component';
import { Locations } from '../../store/models/locations';

import { addNewLocation, deleteLocation } from '../../store/locations.actions';
import { Observable } from 'rxjs';
import { getLocationsList } from '../../store/locations.selector';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {

  locations$: Observable<Locations[]> = this.store.pipe(
    select(getLocationsList)
  )
  constructor(private store: Store,
    public dialog: MatDialog,
    private router: Router) {
  }


  addNewLocationElement() {
    const dialogRef = this.dialog.open(DialogFormLocationComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(locations => {
      if (locations) {
        this.store.dispatch(addNewLocation({ locations }));
      }
    });
  }

  deleteLocationElement(id: number) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(deleteLocation({ id }));
        this.router.navigate(['/locations-list']);
      }
    })
  }

  openDialog(data: Locations) {

    this.dialog.open(DialogLocationInfoComponent, { data });
  }
}
