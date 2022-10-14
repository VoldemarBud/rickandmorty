import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';

import { locationsReducer, LOCATIONS_REDUCER_NODE } from './store/locations.reducer';


@NgModule({
  declarations: [
    LocationsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      LOCATIONS_REDUCER_NODE, locationsReducer
    ),
    RouterModule.forChild([
      {
        path: 'locations-list',
        component: LocationsListComponent
      },
    ]),
    MatListModule
  ],
  exports: [
    LocationsListComponent
  ]
})
export class LocationsModule { }
