import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProgressBarComponent } from './components/helper/progress-bar/progress-bar.component';
import { TestimonialComponent } from './components/helper/testimonial/testimonial.component';
import {HttpClientModule} from '@angular/common/http';
import {FileSaverModule} from 'ngx-filesaver';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SinglePortfolioTemplateComponent } from './components/portfolio/single-portfolio-template/single-portfolio-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    ResumeComponent,
    ProgressBarComponent,
    TestimonialComponent,
    PortfolioComponent,
    SinglePortfolioTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileSaverModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
