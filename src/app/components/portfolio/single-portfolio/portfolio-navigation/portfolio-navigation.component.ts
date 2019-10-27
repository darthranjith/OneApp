import {Component, Input, OnInit} from '@angular/core';
import {PortfolioService} from '../../../../services/portfolio.service';

@Component({
  selector: 'app-portfolio-navigation',
  templateUrl: './portfolio-navigation.component.html',
  styleUrls: ['./portfolio-navigation.component.scss']
})
export class PortfolioNavigationComponent implements OnInit {
@Input() currentPortfolio: number;
next: number;
prev: number;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getTotalPortfolios().subscribe(total => {
      if (this.currentPortfolio === total) {
        this.next = null;
        this.prev = this.currentPortfolio - 1;
      } else if (this.currentPortfolio > 0 && this.currentPortfolio < total) {
        this.next = this.currentPortfolio + 1;
        this.prev = this.currentPortfolio - 1;
      } else {
        this.next = this.currentPortfolio + 1;
        this.prev = null;
      }
    });
  }
}
