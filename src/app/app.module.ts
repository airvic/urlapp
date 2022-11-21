import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {NgTinyUrlModule} from 'ng-tiny-url';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutComponent } from './about/about.component';
import { PractiseComponent } from './practise/practise.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PractiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    NgTinyUrlModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
