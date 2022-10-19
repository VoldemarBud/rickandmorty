import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { DialogFormLocationComponent } from 'src/app/components/dialog-form-location/dialog-form-location.component';
import { DialogLocationInfoComponent } from 'src/app/components/dialog-location-info/dialog-location-info.component';
import { Locations } from '../../store/modules/locations';

import { addNewLocation, deleteLocation } from '../../store/locations.actions';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {
  locations: Locations[] = [];
  location: Locations

  constructor(private store$: Store<any>,
    public dialog: MatDialog,
    private router: Router) {
    this.store$.select('locations').subscribe(data => {
      this.locations = data.locationsList
    });
  }



  addNewLocationElement() {
    const dialogRef = this.dialog.open(DialogFormLocationComponent, {
      width: '250px',
      data: <Locations>{}
    });


    dialogRef.afterClosed().subscribe(data => {

      if (data.confirm) {
        console.log(data)
      }

      this.store$.dispatch(addNewLocation({ data }));
    });

  }

  deleteLocationElement(id: number) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store$.dispatch(deleteLocation({ id }));
        this.router.navigate(['/locations-list']);
      }
    })
  }

  openDialog(data: Locations) {
    this.dialog.open(DialogLocationInfoComponent, { data });
  }
}
