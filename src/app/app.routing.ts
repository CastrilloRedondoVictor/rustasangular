// import { ModuleWithProviders } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { MusicaComponent } from './components/musica/musica.component';
// import { CineComponent } from './components/cine/cine.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'musica', component: MusicaComponent },
//   { path: 'cine', component: CineComponent },
// ];

// export const appRoutingProvider: any[] = [];

// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NumdobleComponent } from './components/numdoble/numdoble.component';
import { TablamultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'cine', component: CineComponent },
  { path: 'numdoble', component: NumdobleComponent },
  { path: 'numdoble/:num', component: NumdobleComponent },
  { path: 'tablamultiplicar/:num', component: TablamultiplicarComponent },
  { path: '**', component: NotfoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
