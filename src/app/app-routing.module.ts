import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'character-list',
  //   pathMatch: 'full'
  // },
  {
    path: 'character-list',
    loadChildren: () => import('./modules/characters/components/character-list/character-list.module').then(m => m.CharacterListModule)
  },

  {
    path: 'character-details/:id',
    loadChildren: () => import('./modules/characters/components/character-details/character-details.module').then(m => m.CharacterDetailsModule)
  },
  {
    path: 'locations-list',
    loadChildren: () => import('./modules/locations/components/locations-list/locations-list.module').then(m => m.LocationsListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
