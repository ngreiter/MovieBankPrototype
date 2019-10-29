import { Component, OnInit } from '@angular/core';

interface Movie {
  name: string;
  director: string;
  gender: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
