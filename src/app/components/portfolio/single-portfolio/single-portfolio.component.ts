import { Component, OnInit } from '@angular/core';
import {PortfolioModel} from '../../../models/portfolio.model';
import {PortfolioService} from '../../../services/portfolio.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-portfolio',
  templateUrl: './single-portfolio.component.html',
  styleUrls: ['./single-portfolio.component.scss']
})
export class SinglePortfolioComponent implements OnInit {
  portfolio: PortfolioModel;

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.portfolioService.getPortfolio(parseInt(this.route.snapshot.params.id, 10)).subscribe(portfolio => {
      this.portfolio = portfolio;
    });
  }

}
