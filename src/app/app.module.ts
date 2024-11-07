import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NumdobleComponent } from './components/numdoble/numdoble.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponentComponent,
    NotfoundComponent,
    NumdobleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
