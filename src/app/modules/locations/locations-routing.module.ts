import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsListComponent } from './components/locations-list/locations-list.component';

const routes: Routes = [
    {
        path: 'locations-list',
        component: LocationsListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocationsRoutingModule { }