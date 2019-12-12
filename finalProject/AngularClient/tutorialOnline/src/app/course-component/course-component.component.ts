import { Component, OnInit } from '@angular/core';
import { ServiceTutorialOnlineService } from '../service-tutorial-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements OnInit {
  courseArr=[];
  courseName:string="";
  courseUrl="course/";
  constructor(private _service:ServiceTutorialOnlineService,private _router:Router) {}
  ngOnInit() {
    this._service.getAllCourses().subscribe(data=>{
        this.courseArr=data;
        console.log("course details fetched is",this.courseArr);
        
        
    },
    err=>{
      console.log("The error status is ",err);
    })    
  } 


  showContent(courseDetails){
    this.courseName=courseDetails.Details.course;
    this.courseUrl=this.courseUrl+this.courseName;
    console.log("url is ",this.courseUrl);
    this._router.navigate([this.courseUrl]);
    
    
    
  }

 
}
