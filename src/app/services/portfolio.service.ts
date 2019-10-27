import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {PortfolioModel} from '../models/portfolio.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portfolios: PortfolioModel[] = [
    {
      id: 1,
      image: '../../assets/images/portfolio/28-shark.png',
      title: 'Chitfund software',
      category: 'Angular/ASP.NET',
      client: 'ARRS SILKS & PACHAIAMMAN SILKS',
      date: 'JULY 2015 – FEBRUARY 2016',
      description: 'Chit Fund Software (CFS) is a web based application for Chit Fund Com-\n' +
        'panies. It also provides secured online access to it members and staffs. Mem-\n' +
        'bers can see next payment information, amount to be paid along with Loan de-\n' +
        'tails etc. It comprises of all the essential facilities and features including Re-\n' +
        'ports and SMS reminders integrated, which required streamlining daily/monthly\n' +
        '\n' +
        'Chit Fund Activities. The same project can behave dynamically based on their\n' +
        'user roles. Plugins were and can be developed and integrated to enhance the\n' +
        'UI functionality of this project.',
      environment: 'WEB',
      role: 'Designed from scratch, Coded the back end logic, 4 layer architecture, EF database connectivity, Coordinated all updates',
      technology: 'ASP.NET MVC5, , C#, HTML, JavaScript,CSS, DevExpress Kit, Entity Framework, MSSQL'
    },
    {
      id: 2,
      image: '../../assets/images/portfolio/27-crocodile.png',
      title: 'AARIS Customer infodesk',
      category: 'Angular/ASP.NET',
      client: 'AARIS, USA',
      date: 'APRIL 2016 – JUNE 2016',
      description: 'Project Falcon is an extension to an already developed product. ' +
        'The previous product is accessible to the staffs only. However, ' +
        'this extension makes the product accessible to the customer also. ' +
        'This custom module helps to track orders, orders details and generate reports. ' +
        'The application is responsive which adapts to any screen size.',
      environment: 'WEB',
      role: 'Conceived the concept, Designed from scratch, Coded the back end logic, ' +
        '4 layers of WebAPI 2, EF database connectivity, Semantic UI',
      technology: 'ASP.NET MVC5, MSSQL, HTML, jQuery / JavaScript, CSS'
    },
    {
      id: 3,
      image: '../../assets/images/portfolio/26-squid.png',
      title: 'SSKOT',
      category: 'Angular/ASP.NET',
      client: 'MULTIPLE CLIENTS, INDIA',
      date: 'FEBRUARY 2016 – APRIL 2016',
      description: 'Project Everest is a hybrid app project for our restaurant clients. ' +
        'This application hooks into our existing retail management software, ' +
        'which is running in our client’s server and brings most of the functionality like KOT management, ' +
        'reports and billing used in the windows application to mobile devices.',
      environment: 'MOBILE',
      role: 'Designed from scratch, Coded the back end logic, 4 layers of WebAPI 2, EF database connectivity',
      technology: 'HTML, JavaScript, CSS, KendoUI, Cordova, WebAPI2'
    },
    {
      id: 4,
      image: '../../assets/images/portfolio/23-fox.png',
      title: 'Pothys reporter',
      category: 'Angular/ASP.NET',
      client: 'POTHYS TEXTILE, INDIA',
      date: 'JULY 2016 – SEPTEMBER 2016',
      description: 'Pothys reporter is a web app that hooks up with our windows application and ' +
        'displays the reports. All the database connectivity and the logics were in web services ' +
        'using php’s latest technology, Laravel. This web service made endless possibilities for ' +
        'software expansion. I, now, created a web application that makes use of this web service. ' +
        'Soon, There will be a mobile application that can make use of this service.',
      environment: 'WEB',
      role: 'Conceived the concept, Designed from scratch, Coded the back end logic',
      technology: 'Laravel 5.2, PHP, HTML, CSS, jQuery / JavaScript, MSSQL'
    },
    {
      id: 5,
      image: '../../assets/images/portfolio/22-pig.png',
      title: 'Green sm reporting',
      category: 'Angular/ASP.NET',
      client: 'GREENS SM TEXTILES, INDIA',
      date: 'JUNE 2016 – JULY 2016',
      description: 'Greens SM Reporting App is designed particularly for the specific client, ' +
        'Greens, who has our heavily customized superior Super Market application. ' +
        'This application hooks up with the database and shows the stocks, sales, and purchase and employee reports. ' +
        'Since it uses the WebAPI2 web services, Android application also takes advantage of this. ' +
        'I always believe in WORE concept (Write Once Run Everywhere) and that’s the way to code.',
      environment: 'MOBILE/WEB',
      role: 'Conceived the concept, Designed from scratch, Coded the back end logic',
      technology: 'Cordova, KendoUI, HTML, jQuery / JavaScript, CSS, MSSQL'
    },
    {
      id: 6,
      image: '../../assets/images/portfolio/20-lion.png',
      title: 'Hospital info system',
      category: 'Angular/ASP.NET',
      client: 'MULTIPLE CLIENTS, INDIA',
      date: 'NOVEMBER 2016 – JANUARY 2017',
      description: 'A complete package for hospital management system. Started with WebApi 2 as backend and ' +
        'Angular 2 as UI and Dapper Database connectivity. It has modules such as patients information, doctor’s information, ' +
        'patient doctor appointment, doctor slot management and much more.',
      environment: 'WEB',
      role: 'WebAPI2, C#, SQL Server, Angular 4, Bootstrap, TypeScript',
      technology: 'Responsive bootstrap UI design, Coded the back end logic, 7 layers of WebAPI 2, ' +
        'Dapper database connectivity, Autofac dependency injection, Fluent validation'
    },
    {
      id: 7,
      image: '../../assets/images/portfolio/17-otter.png',
      title: 'KVT Reporter',
      category: 'Angular/ASP.NET',
      client: 'KV TEXTILES, INDIA',
      date: 'SEPTEMBER 2016 – NOVEMBER 2016',
      description: 'KVT Reporter is a mobile app built on the newly re-invented Angular2 framework. ' +
        'It is refreshing and easy coding structure made this app look stylish and flexible to further extension. ' +
        'Laravel 5, as web service, to handle the backend super-fast.',
      environment: 'WEB',
      role: 'Conceived the concept, Designed from scratch, Coded the back end logic, Laravel API',
      technology: 'Angular / Ionic 2, HTML, TypeScript, SCSS, Laravel 5.2'
    },
    {
      id: 8,
      image: '../../assets/images/portfolio/14-seal.png',
      title: 'Cogwave house keeping',
      category: 'Angular/ASP.NET',
      client: 'MULTIPLE CLIENTS, INDIA',
      date: 'FEBRUARY 2017 – APRIL 2017',
      description: 'Project Kelvin is a MVC 5 application that works as an alternative for the company’s windows application. ' +
        'With this project, the staff can use it anywhere in the world to know the status of the room, which is occupied or vacant. ' +
        'This house keeping web app can be used to allot minibar items in the room, Laundry management, Billings and set NOC status. ' +
        'Also, monitor cleaning status of rooms.',
      environment: 'WEB',
      role: 'Designed from scratch, Responsive material design, Coded the back end logic, ' +
        '7 layers of WebAPI 2, Dapper database connectivity',
      technology: 'WebAPI2, C#, SQL Server, MaterializeCSS, jQuery, JavaScript,ASP.NET MVC'
    },
    {
      id: 9,
      image: '../../assets/images/portfolio/13-elephant.png',
      title: 'HMS Online Reports',
      category: 'Angular/ASP.NET',
      client: 'MULTIPLE CLIENTS, INDIA',
      date: 'JANUARY 2017 – FEBRUARY 2017',
      description: 'This is an online reporting web application for hotels and restaurants. ' +
        'It Provides several reports and mail those reports as attachment. ' +
        'It contains dashboard and reports like room availability, guest info, ' +
        'collection and occupancy in hotel, table matrix, daily sales, item sales and chart features.',
      environment: 'WEB',
      role: 'Designed project architecture, Initial UI design, Initial Back end architecture design, 7 Layer Architecture',
      technology: 'ASP.NET MVC, C#, SQL Server, Angular JavaScript, Bootstrap,WebPI2'
    },
    {
      id: 10,
      image: '../../assets/images/portfolio/11-rabbit.png',
      title: 'EKOT',
      category: 'Angular/ASP.NET/WebAPI',
      client: 'MULTIPLE CLIENTS, INDIA',
      date: 'APRIL 2017 – JULY 2017',
      description: 'This is a hybrid application for the in-house KOT application. Using this app, the client can take orders ' +
        'from the customer and it sends the KOT order to the kitchen and does the billing stuffs. Also, have the concept of table ' +
        'merge and table split.With the power of WebAPI 2 services and Dapper database connectivity, the app is super-fast on reading ' +
        'and writing the data.',
      environment: 'MOBILE/WEB',
      role: 'Designed and Coded from scratch, Used 7 layers, WebAPI 2, ' +
        'Used Repository design pattern, Used Autofac DI, Support, Module Development',
      technology: 'WebAPI2, Angular 4, Ionic, MaterializeCSS, TypeScript, SQL Server'
    },
    {
      id: 11,
      image: '../../assets/images/portfolio/10-taco-toucan.png',
      title: 'Cogwave feedback app',
      category: 'Angular/ASP.NET/WebAPI',
      client: 'MULTIPLE CLIENTS, INDIA',
      date: 'APRIL 2017 – APRIL 2017',
      description: 'Project Leven is a mini project that gets feedbacks from the guests about their hospitality in the hotel. ' +
        'It is a single page application based on angular and the forms are dynamic.',
      environment: 'WEB/MOBILE',
      role: 'Conceived the concept, Designed from scratch, Coded the back end logic, 7 layers, WebAPI2',
      technology: 'WebAPI2, C#, SQL Server, Angular 4, Ionic, TypeScript'
    },
    {
      id: 12,
      image: '../../assets/images/portfolio/09-bird.png',
      title: 'Kitchen display system',
      category: 'Angular/ASP.NET/WebAPI',
      client: 'MULTIPLE CLIENTS, INDIA',
      date: 'JULY 2017 – OCT 2017',
      description: 'This web-app project works conjunction with the EKOT app, that I built previously. ' +
        'This application displays. maintains and closes the kot tickets universally between the waiters and the kitchen chefs.',
      environment: 'MOBILE/WEB',
      role: 'Designed and Coded from scratch, Used 7 layers of WebAPI 2, Used Repository design pattern, ' +
        'Used Autofac DI, Support, Module Development',
      technology: 'WebAPI2, Angular 4, Ionic, MaterializeCSS, TypeScript,SQL Server'
    },
    {
      id: 13,
      image: '../../assets/images/portfolio/07-chick.png',
      title: 'PF Chang\'s site',
      category: 'Angular/Sitefinity/Azure',
      client: 'P.F.CHANG\'S, USA',
      date: 'OCT 2017 – DEC 2017',
      description: 'This is a heavily customized E-Commerce site based on Telerik Sitefinity. I have worked on bug fixing and UI Designs.',
      environment: 'WEB',
      role: 'Bug Fixing, UI Design Support, AngularJS Support',
      technology: 'Asp.Net MVC, C# .Net, AngulatJS1.5, Telerik Sitefinity, Bootstrap, JavaScript, Ajax, jQuery'
    },
    {
      id: 14,
      image: '../../assets/images/portfolio/04-cat.png',
      title: 'Unified book specification',
      category: 'ASP.NET MVC/MSBI/SSIS',
      client: 'LSC COMMUNICATIONS & PEARSON INC, U.S.A',
      date: 'DECEMBER 2017 - SEPTEMBER 2018',
      description: 'This project is a part of a bigger project that’s being developed across multiple teams. ' +
        'This module involves mostly using ETL operations (Extract, Transform and Load) using SSIS and ' +
        'manipulate data using ASP.NET MVC C# (with TDD and SOLID).',
      environment: 'WEB/ETL',
      role: 'Developed the SSIS package for extracting XML files, transforming and loading in the database with business rules. ' +
        'Solely responsible for creating the UI part of the application. Writing Test cases for the web service.',
      technology: 'C#. NET, ASP.NET MVC, EF, JavaScript, jQuery, Bootstrap 4, SSIS, SQL Server 2016, Windows 10, AJAX, WEBAPI2, SOLID, TDD'
    },
    {
      id: 15,
      image: '../../assets/images/portfolio/01-dog.png',
      title: 'Scheduling and staffing',
      category: 'Angular/ASP.NET/Azure',
      client: 'GE HEALTHCARE & SYMPLR',
      date: 'SEPTEMBER 2018 - TILL NOW',
      description: 'This project is a part of a bigger project that’s being developed across multiple teams all over the world. ' +
        'This module involves mostly scheduling the hospital employees based on their availability/ demand/ emergency.',
      environment: 'WEB',
      role: 'responsible for the front-end development, occasionally works on C# / ASP.NET',
      technology: 'Angular 7, C#. NET, ASP.NET MVC, EF, JavaScript, WEBAPI2'
    }
  ];

  constructor() { }

  getAllPortfolios(): Observable<PortfolioModel[]> {
    return(of<PortfolioModel[]>(_.sortBy(this.portfolios, 'id').reverse()));
  }

  getTotalPortfolios(): Observable<number> {
    return(of<number>(this.portfolios.length));
  }

  getPortfolio(id: number): Observable<PortfolioModel> {
    return(of<PortfolioModel>(_.find(this.portfolios, (x) => x.id === id)));
  }
}
