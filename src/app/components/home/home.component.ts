import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {CloseCard, OpenCard} from '../../store/actions/card-status.actions';
import {AboutmeComponent} from '../aboutme/aboutme.component';
import {CloseSection, OpenSection} from '../../store/actions/section-status.actions';
import {ResumeComponent} from '../resume/resume.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  entryComponents: [AboutmeComponent, ResumeComponent]
})
export class HomeComponent implements OnInit {

  isCardOpen: boolean;
  isCloseFocus: boolean;
  @ViewChild('sectionContainer', {static: true, read: ViewContainerRef }) sectionEntry: ViewContainerRef;

  constructor(private store: Store<State>) {
    store.select(state => state.card)
      .subscribe(cardState => this.isCardOpen = cardState.isCardOpen);
  }

  ngOnInit() {
  }

  openCard() {
    this.store.dispatch(new OpenCard());
  }
  closeCard() {
    this.store.dispatch(new CloseCard());
    this.store.dispatch(new CloseSection());
  }

  onCloseFocus(status: boolean) {
    this.isCloseFocus = status;
  }

  openSection() {
    this.store.dispatch(new OpenSection());
    this.sectionEntry.clear();
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
