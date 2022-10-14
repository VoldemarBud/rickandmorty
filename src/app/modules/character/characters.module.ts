import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { charactersReducer, CHARACTER_REDUCER_NODE } from './store/character.reducer';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    RouterModule.forChild([
      {
        path: ' ',
        redirectTo: 'character-list'
      },
      {
        path: 'character-list',
        component: CharacterListComponent
      },
      {
        path: 'character/:id',
        component: CharacterDetailsComponent
      }
    ]),
    // AppRoutingModule,
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
