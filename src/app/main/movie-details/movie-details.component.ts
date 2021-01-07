import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: any;
  rateHovered = 0;
  faStar = faStar;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  rateHover(rate: number){
    this.rateHovered = rate;
  }

  rateClicked(rate: number){
    this.apiService.rateMovie(rate, this.movie.id).subscribe(
      result=> {
        console.log(result);
    },
    error => console.log(error)
    
    );
  }

}
