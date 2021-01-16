import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Movie } from 'src/app/models/Movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[] = [];

  @Output() selectMovie = new EventEmitter<Movie>();
  @Output() editedMovie = new EventEmitter<Movie>();
  @Output() createnewMovie = new EventEmitter();
  @Output() deletedMovie = new EventEmitter<Movie>();

  faStar = faStar;
  faEdit = faEdit;
  faTrash = faTrash;


  

  constructor() { }

  ngOnInit() {}

  movieClicked(movie: Movie) {
    this.selectMovie.emit(movie);
  }

  editMovie(movie: Movie){
    this.editedMovie.emit(movie);
  }

  newMovie(){
    this.createnewMovie.emit();
  }

  deleteMovie(movie: Movie){
    this.deletedMovie.emit(movie);
  }

}
