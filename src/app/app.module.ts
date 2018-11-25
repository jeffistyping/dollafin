import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { LoginComponent }       from '../login/login.component';
import { GameComponent }        from '../game/game.component';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'game', component: GameComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, LoginComponent, GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
