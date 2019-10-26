import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutmeComponent} from './components/aboutme/aboutme.component';
import {ResumeComponent} from './components/resume/resume.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, children:[
      { path: 'about-me', component: AboutmeComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'portfolio', component: PortfolioComponent }
    ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
