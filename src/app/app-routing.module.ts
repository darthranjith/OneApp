import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutmeComponent} from './components/aboutme/aboutme.component';
import {ResumeComponent} from './components/resume/resume.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, children:[
      { path: 'about-me', component: AboutmeComponent },
      { path: 'resume', component: ResumeComponent }
    ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
