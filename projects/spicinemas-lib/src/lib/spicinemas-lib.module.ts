
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {SpicinemasComponent} from './components/spicinemas/spicinemas.component';
import {TerminalComponent} from './components/terminal/terminal.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: '', component: SpicinemasComponent }
];

@NgModule({
  declarations: [SpicinemasComponent, TerminalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [SpicinemasComponent]
})
export class SpicinemasLibModule { }
