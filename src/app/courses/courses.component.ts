import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [NgbCarouselConfig]
})
export class CoursesComponent implements OnInit {

  constructor( config: NgbCarouselConfig) {
    config.interval = 200;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
   }

  ngOnInit() {
  }

}
