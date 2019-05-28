import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  slideConfig = {
    'infinite': true,
    'dots': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'rows': 0,
    'autoplay': true,
    'autoplaySpeed': 2000,
    'pauseOnHover': false
  };

  constructor() { }

  ngOnInit() {
  }

}
