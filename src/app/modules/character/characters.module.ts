import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { charactersReducer, CHARACTER_REDUCER_NODE } from './store/character.reducer';
import { CharacterRoutingModule } from './character-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './store/character.effects';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    CharacterRoutingModule,
    StoreModule.forFeature(
      CHARACTER_REDUCER_NODE,
      charactersReducer),
    EffectsModule.forFeature([CharactersEffects])
  ],
  exports: [
    CharacterListComponent,
    CharacterDetailsComponent
  ]
})

export class CharactersModule { }
