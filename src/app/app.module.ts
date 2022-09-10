import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MonteOSeuComponent } from './pages/monte-o-seu/monte-o-seu.component';
import { SlideshowComponent } from './shared/components/slideshow/slideshow.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonteOSeuComponent,
    SlideshowComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
