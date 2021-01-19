import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie = null;
  editedMovie: any;
  
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
 ) { }

  ngOnInit(): void {

    const mrToken = this.cookieService.get('mr-token');
    if(!mrToken){
      this.router.navigate(['/auth']);
    } else {
      this.apiService.getMovies().subscribe(
        (    data: any) => {
          this.movies = data;
    },
    (    error: any) => console.log(error)      
    );
  }
  
  
}

logout(){
  this.cookieService.delete('mr-token');
  this.router.navigate(['/auth']);
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
  this.apiService.deleteMovie(movie.id).subscribe(
    data => {
      this.movies = this.movies.filter(mov => mov.id !== movie.id);
    },
    (    error: any) => console.log(error)      
  );
}

movieCreated(movie: Movie){
  this.movies.push(movie);
  this.editedMovie= null;
}

movieUpdated(movie: Movie){
  const indx = this.movies.findIndex(mov => mov.id === movie.id);
  if(indx >= 0) {
    this.movies[indx] = movie;
  }
  this.editedMovie= null;
}

}
