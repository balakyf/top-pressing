import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public router: Router) {}

  go() {
    this.router.navigate(['repassage']);
  }

  go2() {
    this.router.navigate(['lavage']);
  }

  go3() {
    this.router.navigate(['lavage-repassage']);
  }

}
