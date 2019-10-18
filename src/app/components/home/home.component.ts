import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {CloseCard, OpenCard} from '../../store/actions/card-status.actions';
import {AboutmeComponent} from '../aboutme/aboutme.component';
import {CloseSection, OpenSection} from '../../store/actions/section-status.actions';
import {ResumeComponent} from '../resume/resume.component';

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
  constructor(private store: Store<State>, private resolver: ComponentFactoryResolver) {
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

  openSection(section: string) {
    switch (section) {
      case 'about-me':
        this.loadAboutMeComponent();
        break;
      case 'resume':
        this.loadResumeComponent();
        break;
      case 'portfolio':
        alert('portfolio');
        break;
      case 'contact':
        alert('CONTACT');
        break;
    }
  }
  loadAboutMeComponent() {
    this.store.dispatch(new OpenSection());
    this.sectionEntry.clear();
    const factory = this.resolver.resolveComponentFactory(AboutmeComponent);
    const componentRef = this.sectionEntry.createComponent(factory);
  }
  loadResumeComponent() {
    this.store.dispatch(new OpenSection());
    this.sectionEntry.clear();
    const factory = this.resolver.resolveComponentFactory(ResumeComponent);
    const componentRef = this.sectionEntry.createComponent(factory);
  }
}
