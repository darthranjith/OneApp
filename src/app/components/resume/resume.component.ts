import { Component, OnInit } from '@angular/core';
import {ProgressBarModel} from '../../models/progress-bar.model';
import {TestimonialModel} from '../../models/testimonial.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  skills: ProgressBarModel[];
  testimonials: TestimonialModel[];

  constructor() { }

  ngOnInit() {
    this.skills = [
      {
        title: 'ANGULAR',
        percentage: 90
      },
      {
        title: 'C# / ASP.NET / WEBAPI',
        percentage: 80
      },
      {
        title: 'SSIS / SSRS',
        percentage: 70
      },
      {
        title: 'SOLID / TDD / DESIGN PATTERNS',
        percentage: 80
      },
      {
        title: 'CSS / SASS',
        percentage: 90
      },
      {
        title: 'JASMINE / KARMA',
        percentage: 95
      },
      {
        title: 'PYTHON',
        percentage: 40
      },
      {
        title: 'REACTJS',
        percentage: 50
      }
    ];
    this.testimonials = [
      {
        name: 'VIJAYA KUMAR PALANISAMY',
        position: 'SUPERVISING ASSOCIATE / EY.',
        image: '../../../assets/images/site/vijayakumar.jpg',
        comments: 'Quick learner and smart worker. Ready to accept the challenges and ' +
          'deliver it on time... Good Team player.'
      },
      {
        name: 'SELVAKUMAR VADAMALAI',
        position: 'LEAD TESTING / SAGGEZZA',
        image: '../../../assets/images/site/selvakumar.jpg',
        comments: 'I rarely come across real talents who stand out like Ranjith. ' +
          'Genuine expert’ is the phrase that comes to mind when I think about him.'
      },
      {
        name: 'GAFOOR SHAIK',
        position: 'STAFF SOFTWARE ENGINEER / GE',
        image: '../../../assets/images/site/gafoor.jpeg',
        comments: 'Ranjith is a proactive and self motivated team player with good Technical skills. ' +
          'His expertisation on front end technoligies like angular 7 and ' +
          'server side technlogies Web Api helped the team to solve complex issues.' +
          'He is flexible and has excellent problem solving skills. I would recommend him as a full stack .net developer.'
      },
      {
        name: 'SARBAJIT DASH',
        position: 'SENIOR SOFTWARE ENGINEER / GE',
        image: '../../../assets/images/site/sarbajit.jpg',
        comments: 'Working with Ranjith is a wonderful experience.' +
          'He is very organized and dedicated. ' +
          'He make sure he completes task on time and without compromising any quality. ' +
          'He contributed many ideas out of the box. ' +
          'He has good sense of humor and strong work ethics.'
      },
      {
        name: 'SHRAVIL',
        position: 'SOFTWARE ENGINEER / GE',
        image: '../../../assets/images/site/shravil.jpg',
        comments: 'Ranjith is a extra ordinary guy, who always thinks out of the box. ' +
          'His mind blowing ideas have lead our team to Hackathon winners. ' +
          'He always keeps his work environment cool. His skills are amazing. ' +
          'He is a quick learner. He is the guy who never fears difficulties.'
      },
      {
        name: 'RAGUVENTHAN',
        position: 'HEAD OF IT / FIRST STEPS',
        image: '../../../assets/images/site/raguventhan.jpg',
        comments: 'The most energetic person I have ever met. ' +
          'He is a quick learner, get complete all the works before deadline.'
      },
      {
        name: 'PRABHAKARAN SATHASIVAM',
        position: 'PROJECT MANAGER / SIVASAKTHI SOFTWARES',
        image: '../../../assets/images/site/prabakaran.jpg',
        comments: 'Ranjith was my colleague at Sivasakthi Software. ' +
          'He is sincere, dedicated in his work. I wish him all good luck '
      }
    ];
  }

}
