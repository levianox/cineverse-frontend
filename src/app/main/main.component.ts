import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie = null;
  editedMovie = null;

  constructor(
    private apiService: ApiService
 ) { }

  ngOnInit(): void {
  
  this.apiService.getMovies().subscribe(
    (    data: any) => {
      this.movies = data;
    },
    (    error: any) => console.log(error)      
  );
}

selectMovie(movie: any) {
  this.selectedMovie = movie;
  this.editedMovie = null;
}

editMovie(movie: any) {
  this.editedMovie = movie;
  this.selectedMovie = null;
}

createnewMovie(){
  this.editedMovie = {title:'', description: ''};
  this.selectedMovie = null;
}

deletedMovie(movie: Movie){
  console.log('delete', movie.title);
}

}
