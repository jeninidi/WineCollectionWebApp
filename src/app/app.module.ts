import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./MaterialModule";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { AppComponent } from './app.component';
import { WinebottlesListComponent } from './winebottles-list/winebottles-list.component';
import { MaterialmoduleTestComponent } from './materialmodule-test/materialmodule-test.component';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    WinebottlesListComponent,
    MaterialmoduleTestComponent,
    AddNewComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
