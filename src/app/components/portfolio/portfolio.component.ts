import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioModel} from '../../models/portfolio.model';
import {PortfolioService} from '../../services/portfolio.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolios: PortfolioModel[];
  portfoliosSubscription$: Subscription;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfoliosSubscription$ = this.portfolioService.getAllPortfolios()
      .subscribe(portfolios => {
      this.portfolios = portfolios;
    });
  }

  ngOnDestroy(): void {
    this.portfoliosSubscription$.unsubscribe();
  }
}
