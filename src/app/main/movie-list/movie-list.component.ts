import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: any = [];

  @Output() selectMovie = new EventEmitter();

  faStar = faStar;
  faEdit = faEdit;
  faTrash = faTrash;


  

  constructor() { }

  ngOnInit() {}

  movieClicked(movie: any) {
    this.selectMovie.emit(movie);
  }

}
