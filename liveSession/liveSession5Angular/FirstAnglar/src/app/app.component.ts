import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<h1>My app is {{title}}</h1>
  <input #id1 type="text" value="Kunal">
  <button (click)="getName($event,id1.value)"  value="click" >Click</button>
  <h1 [ngClass]=newClass>Code R  Evolution</h1>
  College name: <input [(ngModel)]="School" type="text"> {{School}}
  <div *ngIf=!check;else cool;>
    <h1>inside if case</h1>
  </div>
  <div #cool>
    <h2>inside cool</h2>
  </div>
  <div [ngSwitch]=colorCool>
    <h1 *ngSwitchCase="'red'">Inside h1 red</h1>
    <h1 *ngSwitchCase="'brown'">Inside h1 brown</h1>
    <h1 *ngSwitchDefault>Inside defualt case</h1>
   
  </div>


  <app-new-component [parentData]="From Parent"></app-new-component>
  `,
  styles: [`
  .success{
    color:green;
  }
  .non-success{
    color:red;
  }

  .italicClass{
    font-style: italic;
  }
  
  `]
})
export class AppComponent {

  title:string = 'FirstAnglar';
  name="kunal";
  isBoolean=false;
  isSpecial=true;
  colorCool="red3e";
  check=true;
  School="B.D Memorial";
  className="non-success";
  cool={
    iue:"sdjf",
  }
  newClass={
    "italicClass":this.isSpecial,
    "success":this.isBoolean,
    "non-success":!this.isBoolean
  }

  getName(input,text)
  {
    // console.log(input);
    this.title="DemoName";
    console.log("The name is "+text);
  }
  
}
