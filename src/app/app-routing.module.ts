import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } 		from '@angular/common';
import { AppComponent }      	from './app.component';
import { LoginComponent }		from '../login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: AppComponent }
];


// ngModule has to be at the end 
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}


