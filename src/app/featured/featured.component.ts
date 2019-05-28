import { Component, OnInit } from '@angular/core';
import 'jquery';
declare var $: any;

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const feat_item = $('.featured-section .featured-wrap .img-wrap');
    const feat_sm_item = $('.featured-section .featured-wrap .img-wrap.half');
    const feat_wHeight = $(window).height();

    feat_item.height(feat_wHeight);
    feat_sm_item.height(feat_wHeight / 2);
    feat_item.addClass('full-screen');
    let wHeight = $(window).height();

    $('.featured-section img').each(function () {
      const src = $(this).attr('src');
      $(this).parent().css({
        'background-image': 'url(' + src + ')'
      });
      $(this).remove();
    });

    $(window).on('resize', function () {
      wHeight = $(window).height();
      feat_item.height(wHeight);
    });

    $('.featured-section .img-wrap').on('mousemove', function (e) {
      const amountMovedX = (e.pageX * -1 / 16);
      const amountMovedY = (e.pageY * -1 / 16);
      $(this).css(
        {
          '-webkit-transform': '-webkit-translate(amountMovedX + \'px \',amountMovedY + \'px\')'
        }
      );
    });

  }

}
