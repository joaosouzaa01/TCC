import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MonteOSeuComponent } from './pages/monte-o-seu/monte-o-seu.component';
import { SlideshowComponent } from './shared/components/slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonteOSeuComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
