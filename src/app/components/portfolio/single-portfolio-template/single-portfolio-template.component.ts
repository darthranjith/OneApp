import {Component, Input, OnInit} from '@angular/core';
import {PortfolioTemplateModel} from '../../../models/portfolio-template.model';

@Component({
  selector: 'app-single-portfolio-template',
  templateUrl: './single-portfolio-template.component.html',
  styleUrls: ['./single-portfolio-template.component.scss']
})
export class SinglePortfolioTemplateComponent implements OnInit {

  @Input() portfolio: PortfolioTemplateModel;
  constructor() { }

  ngOnInit() {
  }

}
