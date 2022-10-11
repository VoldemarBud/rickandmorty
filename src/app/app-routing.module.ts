import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './modules/character/components/character-details/character-details.component';
import { CharacterListComponent } from './modules/character/components/character-list/character-list.component';

const routes: Routes = [

  {
    path: 'character-list',
    component: CharacterListComponent
  },
  {
    path: 'character/:id',
    component: CharacterDetailsComponent
  },
  {
    path:'**',
    redirectTo: 'character-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

