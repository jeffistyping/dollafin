import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { LoginComponent }       from '../login/login.component';
import { GameComponent }        from '../game/game.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService }          from '../data.service';

let routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'game', component: GameComponent, runGuardsAndResolvers: 'always'},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, LoginComponent, GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
