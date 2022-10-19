import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { StoreModule } from '@ngrx/store';

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { locationsReducer, LOCATIONS_REDUCER_NODE } from './store/locations.reducer';
import { DialogFormLocationComponent } from 'src/app/components/dialog-form-location/dialog-form-location.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LocationsRoutingModule } from './locations-routing.module';


@NgModule({
  declarations: [

    DialogFormLocationComponent, LocationsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      LOCATIONS_REDUCER_NODE, locationsReducer
    ),
    LocationsRoutingModule,
    FormsModule,
    MatDialogModule,
    MatListModule,
    MatInputModule ,
    MatFormFieldModule
  ],
  exports: [
    DialogFormLocationComponent, LocationsListComponent
  ]
})
export class LocationsModule { }
