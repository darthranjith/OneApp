import { Component, OnInit } from '@angular/core';
import {PortfolioTemplateModel} from '../../models/portfolio-template.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolios: PortfolioTemplateModel[];

  constructor() { }

  ngOnInit() {
    this.portfolios = [
      {
        id: 1,
        image: '../../assets/images/portfolio/01-dog.png',
        title: 'Scheduling and staffing',
        category: 'Angular/ASP.NET/Azure'
      },
      {
        id: 2,
        image: '../../assets/images/portfolio/04-cat.png',
        title: 'Unified book specification',
        category: 'ASP.NET MVC/MSBI/SSIS'
      },
      {
        id: 3,
        image: '../../assets/images/portfolio/07-chick.png',
        title: 'PF Chang\'s site',
        category: 'Angular/Sitefinity/Azure'
      },
      {
        id: 4,
        image: '../../assets/images/portfolio/09-bird.png',
        title: 'Kitchen display system',
        category: 'Angular/ASP.NET/WebAPI'
      },
      {
        id: 5,
        image: '../../assets/images/portfolio/10-taco-toucan.png',
        title: 'Cogwave feedback app',
        category: 'Angular/ASP.NET/WebAPI'
      },
      {
        id: 6,
        image: '../../assets/images/portfolio/11-rabbit.png',
        title: 'EKOT',
        category: 'Angular/ASP.NET/WebAPI'
      },
      {
        id: 7,
        image: '../../assets/images/portfolio/13-elephant.png',
        title: 'HMS Online Reports',
        category: 'Angular/ASP.NET'
      },
      {
        id: 8,
        image: '../../assets/images/portfolio/14-seal.png',
        title: 'Cogwave house keeping',
        category: 'Angular/ASP.NET'
      },
      {
        id: 9,
        image: '../../assets/images/portfolio/17-otter.png',
        title: 'KVT Reporter',
        category: 'Angular/ASP.NET'
      },
      {
        id: 10,
        image: '../../assets/images/portfolio/20-lion.png',
        title: 'Hospital info system',
        category: 'Angular/ASP.NET'
      },
      {
        id: 11,
        image: '../../assets/images/portfolio/22-pig.png',
        title: 'Green sm reporting',
        category: 'Angular/ASP.NET'
      },
      {
        id: 12,
        image: '../../assets/images/portfolio/23-fox.png',
        title: 'Pothys reporter',
        category: 'Angular/ASP.NET'
      },
      {
        id: 13,
        image: '../../assets/images/portfolio/26-squid.png',
        title: 'SSKOT',
        category: 'Angular/ASP.NET'
      },
      {
        id: 14,
        image: '../../assets/images/portfolio/27-crocodile.png',
        title: 'AARIS Customer infodesk',
        category: 'Angular/ASP.NET'
      },
      {
        id: 15,
        image: '../../assets/images/portfolio/28-shark.png',
        title: 'Chitfund software',
        category: 'Angular/ASP.NET'
      }
    ];
  }

}
