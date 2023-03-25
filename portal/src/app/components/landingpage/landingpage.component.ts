import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  offersImage = [
    'assets/images/hoodie1.webp',
    'assets/images/tee1.webp',
    'assets/images/clava1.webp',
  ];

  constructor() {}

  ngOnInit() {}
}
