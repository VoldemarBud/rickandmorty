import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule
  ],
  exports: [
    CharacterListComponent,
    CharacterDetailsComponent
  ]
})

export class CharacterModule { }
