import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
const myComponents = [
  CharacterDetailsComponent,
  CharacterListComponent
]

@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ], exports: [...myComponents]
})
export class CharactersModule { }
