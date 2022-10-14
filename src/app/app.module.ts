import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';

import { LocationsModule } from './modules/locations/locations.module';
import { CharactersModule } from './modules/character/characters.module';
import { DialogLocationInfoComponent } from './components/dialog-location-info/dialog-location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogConfirmComponent,
    DialogLocationInfoComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: ' ',
        redirectTo: 'character-list'
      },
      {
        path: '**',
        redirectTo: 'character-list'
      }
    ]),
    CharactersModule,
    LocationsModule,
    StoreModule.forRoot({}, {
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
