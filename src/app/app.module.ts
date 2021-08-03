import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewThingsListComponent } from './new-things-list/new-things-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewThingsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
