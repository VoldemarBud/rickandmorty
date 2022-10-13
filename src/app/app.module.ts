import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { CharactersModule } from './modules/character/characters.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogConfirmComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {
        path: ' ',
        redirectTo: 'character-list'
      },
      {
        path:'**',
        redirectTo: 'character-list'
      }
    ]),
    CharactersModule,
    StoreModule.forRoot({}, {
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
