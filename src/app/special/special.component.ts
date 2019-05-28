import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    const countDownDate = new Date('Jan 5, 2020 15:37:25').getTime();

    // Update the count down every 1 second
// tslint:disable-next-line: prefer-const
    let x = setInterval(function () {

      // Get todays date and time
// tslint:disable-next-line: prefer-const
      let now = new Date().getTime();

      // Find the distance between now and the count down date
// tslint:disable-next-line: prefer-const
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
// tslint:disable-next-line: prefer-const
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
// tslint:disable-next-line: prefer-const
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// tslint:disable-next-line: prefer-const
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// tslint:disable-next-line: prefer-const
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById('count_day').innerHTML = days.toString();
      document.getElementById('count_hour').innerHTML = hours.toString();
      document.getElementById('count_min').innerHTML = minutes.toString();
      document.getElementById('count_sec').innerHTML = seconds.toString();

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('inner-countdown').innerHTML = 'EXPIRED';
      }
    }, 1000);
  }

}
