import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ProgressBarModel} from '../../../models/progress-bar.model';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewInit {

  @Input() skillset: ProgressBarModel;
  loaded: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.loaded = true;
  }

}
