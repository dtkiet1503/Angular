import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { GiaoDichComponent } from './giao-dich/giao-dich.component';

@NgModule({
  declarations: [
    AppComponent,

    GiaoDichComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
