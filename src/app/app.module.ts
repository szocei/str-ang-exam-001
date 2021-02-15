import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './common/home/home.component';
import { HeroesComponent } from './common/heroes/heroes.component';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
