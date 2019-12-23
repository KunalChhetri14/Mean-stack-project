import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tutorialOnline';
  urlMatch;
  talk = '';
  AppComponent(_router: Router) {}

  ngOnInit() {
    this.talk = 'Hey angular!';
    this.urlMatch = window.location.href.includes('course');
    console.log(this.urlMatch);
    console.log('sdjflsdjfjsdfj');
  }
}
