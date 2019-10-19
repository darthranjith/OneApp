import {Component, Input, OnInit} from '@angular/core';
import {TestimonialModel} from '../../../models/testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  @Input() testimonial: TestimonialModel;
  constructor() { }

  ngOnInit() {
  }

}
