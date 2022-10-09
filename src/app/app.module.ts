import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterModule } from './modules/character/character.module';
import { LocationModule } from './modules/location/location.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CharacterModule,
    LocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
