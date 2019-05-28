import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  slideConfig = {
    'infinite': true,
    'arrows': false,
    'dots': false,
    'slidesToShow': 5,
    'slidesToScroll': 1,
    'rows': 0,
    'autoplay': true,
    'pauseOnHover': false
  };

  constructor() { }

  ngOnInit() {
  }

}
