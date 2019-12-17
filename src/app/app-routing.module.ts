import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutmeComponent} from './components/aboutme/aboutme.component';
import {ResumeComponent} from './components/resume/resume.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ContactComponent} from './components/contact/contact.component';
import {PocComponent} from './components/poc/poc.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
      { path: 'about-me', component: AboutmeComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'portfolio', component: PortfolioComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'poc', component: PocComponent}
    ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'spicinemas',
    loadChildren: () => import('../../projects/spicinemas-lib/src/lib/spicinemas-lib.module').then(m => m.SpicinemasLibModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
