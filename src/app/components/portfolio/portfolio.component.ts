import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioModel} from '../../models/portfolio.model';
import {PortfolioService} from '../../services/portfolio.service';
import {Subscription} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolios: PortfolioModel[];
  portfoliosSubscription$: Subscription;
  constructor(private portfolioService: PortfolioService, private modalService: NgbModal) { }

  ngOnInit() {
    this.portfoliosSubscription$ = this.portfolioService.getAllPortfolios()
      .subscribe(portfolios => {
      this.portfolios = portfolios;
    });
  }

  openFormModal() {
    const modalRef = this.modalService.open(SinglePortfolioComponent);
    modalRef.componentInstance.id = 10;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.portfoliosSubscription$.unsubscribe();
  }
}
