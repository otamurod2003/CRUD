import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ContactComponent} from './contact.component';
import{FormsModule}from '@angular/forms';
import {MatButtonModule } from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{HttpClientModule } from '@angular/common/http'
import { ApiService } from './api.service';
import { ContactsComponent } from './contacts/contacts.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
