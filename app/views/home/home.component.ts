import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl:"./home.component.html" 
})
export class HomeViewComponent {
  users;

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json())
      .subscribe(res => this.users = res)
  }
}
