import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  slides = [
    { img: 'assets/img/sectional-furniture.jpg', position: 'content-wrap-left' },
    { img: 'assets/img/modern-furniture.jpg', position: 'offset-md-6 content-wrap-right'  },
    { img: 'assets/img/modern_furniture_modern_sofas_modern_sectional.jpg', position: 'content-wrap-left' }
  ];
  slideConfig = {
    'infinite': false,
    'arrows': true,
    'dots': true,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'fade': true,
    'rows': 0,
    'autoplay': true,
    'pauseOnHover': false
   };

  constructor() { }

  ngOnInit() {
  }

}
