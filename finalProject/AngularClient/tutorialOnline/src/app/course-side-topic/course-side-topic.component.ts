import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServiceTutorialOnlineService } from '../service-tutorial-online.service';
import {
  ActivatedRoute,
  Router,
  ParamMap,
  convertToParamMap
} from '@angular/router';
@Component({
  selector: 'app-course-side-topic',
  templateUrl: './course-side-topic.component.html',
  styleUrls: ['./course-side-topic.component.css']
})
export class CourseSideTopicComponent implements OnInit {
  constructor(
    private _service: ServiceTutorialOnlineService,
    private _actRoute: ActivatedRoute,
    private _router: Router
  ) {}
  courseSubTopics = [];
  subTopicsContent = [];
  topics = [];
  course: string;
  lastTemplate = undefined;
  ngOnInit() {
    // let url=window.location.href.split("/");
    // let course=decodeURIComponent(url[url.length-1]);

    this._actRoute.paramMap.subscribe((params: ParamMap) => {
      this.course = params.get('CourseName');
    });

    console.log('The course name is ', this.course);
    // let jsonObject={"courseName":course}

    this._service.getSubTopics(this.course).subscribe(
      data => {
        //this.subTopicsContent=data.Details.Topics;
        console.log('The sub topics arr are : ', data);

        this.topics = data[0].Details.Topics;
        console.log('The array contents are: ', this.topics);
        console.log('The length of array is ', this.topics.length);
      },
      err => {
        console.log('Error is ', err);
      }
    );

    // this._router.navigate('')
  }

  refreshMainPage(template, subTopic) {
    //this._router.navigate([this.courseName,"MainPage"],{relativeTo:this._route});
    // this._router.navigate([this.courseName,"MainPage"],{relativeTo:this._route});
    if (this.lastTemplate != undefined) {
      this.lastTemplate.color = 'primary';
    }

    console.log('Refresh main page contents are: ', subTopic.subTopic);
    // template.setAttribute("class","colorDiv");
    template.color = 'warn';
    console.log('contents template is ', template);
    this.lastTemplate = template;
    // template._color="warn";
    this._router.navigate([subTopic.subTopic], { relativeTo: this._actRoute });
  }
}
