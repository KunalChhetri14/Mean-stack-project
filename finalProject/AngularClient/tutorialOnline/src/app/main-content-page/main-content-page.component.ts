import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main-content-page',
  templateUrl: './main-content-page.component.html',
  styleUrls: ['./main-content-page.component.css']
})
export class MainContentPageComponent implements OnInit {
  constructor(private _actRoute: ActivatedRoute) {}
  
  course="";
  ngOnInit() {
    this._actRoute.paramMap.subscribe((params: ParamMap) => {
      this.course = params.get('Main');
      console.log('THe link is ', this.course);
    });
  }
}
