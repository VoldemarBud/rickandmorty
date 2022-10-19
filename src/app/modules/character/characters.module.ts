import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { charactersReducer, CHARACTER_REDUCER_NODE } from './store/character.reducer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterRoutingModule } from './character-routing.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,                      
    ReactiveFormsModule,
    CharacterRoutingModule,
    StoreModule.forFeature(
      CHARACTER_REDUCER_NODE,
      charactersReducer)
  ],
  exports: [
    CharacterListComponent,
    CharacterDetailsComponent
  ]
})

export class CharactersModule { }
