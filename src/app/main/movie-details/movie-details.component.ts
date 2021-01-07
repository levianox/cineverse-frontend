import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: any;
  rateHovered = 0;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

  rateHover(rate: number){
    this.rateHovered = rate;
  }

}
