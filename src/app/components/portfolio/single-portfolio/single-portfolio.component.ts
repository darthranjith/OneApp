import {Component, Input, OnInit} from '@angular/core';
import {PortfolioModel} from '../../../models/portfolio.model';
import {PortfolioService} from '../../../services/portfolio.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-portfolio',
  templateUrl: './single-portfolio.component.html',
  styleUrls: ['./single-portfolio.component.scss']
})
export class SinglePortfolioComponent implements OnInit {
  portfolio: PortfolioModel;
  @Input() id: number;
  constructor(private portfolioService: PortfolioService, public activeModal: NgbActiveModal) {}

  ngOnInit() {
      this.portfolioService.getPortfolio(this.id).subscribe(portfolio => {
        this.portfolio = portfolio;
      });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
