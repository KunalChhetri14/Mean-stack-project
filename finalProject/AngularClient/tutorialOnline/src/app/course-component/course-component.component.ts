import { Component, OnInit } from '@angular/core';
import { ServiceTutorialOnlineService } from '../service-tutorial-online.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements OnInit {
  courseArr=[];
  courseName:string="";
  courseUrl="course/";
  constructor(private _service:ServiceTutorialOnlineService,
    private _router:Router,private _route:ActivatedRoute) {}
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
    this._router.navigate([this.courseName,"MainPage"],{relativeTo:this._route});
    
    
    
  }

 
}
