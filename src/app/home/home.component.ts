import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  element = new Object();
  movies = new Array();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.movies.push(this.element);
    this.element = new Object();
  }

}
