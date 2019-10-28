import {Component, Input, OnInit} from '@angular/core';
import {PortfolioService} from '../../../../services/portfolio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-navigation',
  templateUrl: './portfolio-navigation.component.html',
  styleUrls: ['./portfolio-navigation.component.scss']
})
export class PortfolioNavigationComponent implements OnInit {
@Input() previous: number;
@Input() next: number;
  constructor() { }

  ngOnInit() {
  }
}
