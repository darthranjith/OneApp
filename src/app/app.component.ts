import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VaRanjith - Design is passion | Code is poetry';
  public isCardOpen: boolean;
  public isSectionOpen: boolean;

  constructor(private store: Store<State>) {
    store.select(state => state.card)
      .subscribe(cardStat => this.isCardOpen = cardStat.isCardOpen);
    store.select(state => state.section)
      .subscribe(sectionStat => this.isSectionOpen = sectionStat.isSectionOpen);
  }
}
