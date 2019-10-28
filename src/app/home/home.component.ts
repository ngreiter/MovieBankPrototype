import { Component, OnInit } from '@angular/core';

interface Movie {
  name: string;
  director: string;
  gender: string;
}

const MOVIES: Movie[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    movies = MOVIES;
  }

  onSubmit() {
    movies.push(newMovie);
  }

}
