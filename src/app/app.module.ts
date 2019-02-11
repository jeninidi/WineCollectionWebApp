import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from "./MaterialModule";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { WinebottlesListComponent } from './winebottles-list/winebottles-list.component';
import { MaterialmoduleTestComponent } from './materialmodule-test/materialmodule-test.component';

@NgModule({
  declarations: [
    AppComponent,
    WinebottlesListComponent,
    MaterialmoduleTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
