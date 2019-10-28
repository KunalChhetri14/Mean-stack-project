import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `<h1>Child component  From Parent is : {{name}}</h1>   `//'./new-component.component.html'
  ,
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  @Input() public parentData;
  ngOnInit() {
  }
  Name="kunal";
  Email=""
}
