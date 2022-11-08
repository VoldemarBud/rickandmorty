import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ' ',
    loadChildren: () => import('./modules/character/characters.module').then(m => m.CharactersModule)
    // ,redirectTo: 'character-list'
  },
  {
    path: '**',
    loadChildren: () => import('./modules/character/characters.module').then(m => m.CharactersModule)
    // redirectTo: 'character-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

