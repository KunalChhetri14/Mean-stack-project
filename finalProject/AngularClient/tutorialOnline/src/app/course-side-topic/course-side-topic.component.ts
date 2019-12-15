import { Component, OnInit } from '@angular/core';
import { ServiceTutorialOnlineService } from '../service-tutorial-online.service';
import {ActivatedRoute, Router, ParamMap, convertToParamMap} from '@angular/router'
@Component({
  selector: 'app-course-side-topic',
  templateUrl: './course-side-topic.component.html',
  styleUrls: ['./course-side-topic.component.css']
})
export class CourseSideTopicComponent implements OnInit {

  constructor(private _service:ServiceTutorialOnlineService,
    private _actRoute:ActivatedRoute) { }
  courseSubTopics=[];
  subTopicsContent=[];
  topics=[];
  course:string;
  ngOnInit() {
    
    // let url=window.location.href.split("/");
    // let course=decodeURIComponent(url[url.length-1]);
    
    this._actRoute.paramMap.subscribe((params:ParamMap)=>{
       this.course=params.get('CourseName');
    })
    
    console.log("The course name is ",this.course);
    // let jsonObject={"courseName":course}
    
    this._service.getSubTopics(this.course).subscribe(data=>{
      //this.subTopicsContent=data.Details.Topics;
      console.log("The sub topics arr are : ",data);
      
      this.topics=data[0].Details.Topics;
      console.log("The array contents are: ",this.topics);
      console.log("The length of array is ",this.topics.length);
    },
    err=>{
      console.log("Error is ",err);
    });
  }
  

}
