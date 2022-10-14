import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { DialogFormLocationComponent } from 'src/app/components/dialog-form-location/dialog-form-location.component';
import { DialogLocationInfoComponent } from 'src/app/components/dialog-location-info/dialog-location-info.component';
import { HttpReq } from 'src/app/http/http';
import { ILocations } from '../../locations.interface';

import { addNewLocation, deleteLocation, getLocationsList } from '../../store/locations.actions';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  locations: ILocations[] = [];
  location!: ILocations

  constructor(private store$: Store<any>,
    private httpReq: HttpReq,
    public dialog: MatDialog,
    private router: Router) {
    this.store$.select('locations').subscribe(data => {
      this.locations = data.locationsList
    });
  }

  ngOnInit(): void {
    this.httpReq.getLocationsList().subscribe((res: any) => {
      if (res?.results?.length) {
        const { info, results } = res;
        this.store$.dispatch(getLocationsList({ data: results }));
      }
    })
  }

  addNewLocationElement() {
    const dialogRef = this.dialog.open(DialogFormLocationComponent, {
      width: '250px',
      data: <ILocations>{}
    });


    dialogRef.afterClosed().subscribe(result => {
      result.url = 'https://rickandmortyapi.com/api/location/' + result.url;
      result.created = new Date();
      result.id = this.locations[this.locations.length - 1].id + 1

      console.log(result);

      this.store$.dispatch(addNewLocation({ data: result }));
    });

  }

  deleteLocationElement(index: number) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store$.dispatch(deleteLocation({ index }));
        this.router.navigate(['/locations-list']);
      }
    })
  }

  openDialog(data: ILocations) {
    this.dialog.open(DialogLocationInfoComponent, { data });
  }
}
