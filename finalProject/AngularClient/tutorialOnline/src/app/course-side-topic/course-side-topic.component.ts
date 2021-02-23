import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServiceTutorialOnlineService } from '../service-tutorial-online.service';
import {
  ActivatedRoute,
  Router,
  ParamMap,
  convertToParamMap
} from '@angular/router';
import { subTopicModel } from '../dataModel';
@Component({
  selector: 'app-course-side-topic',
  templateUrl: './course-side-topic.component.html',
  styleUrls: ['./course-side-topic.component.css']
})
export class CourseSideTopicComponent implements OnInit, AfterViewInit {
  constructor(
    private _service: ServiceTutorialOnlineService,
    private _actRoute: ActivatedRoute,
    private _router: Router
  ) {}

  public isFirstSubTopic: boolean = false;
  ngAfterViewInit(): void {
   
  }

  courseSubTopics = [];
  subTopicsContent = [];
  topics : Array<subTopicModel>=[];
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

        this.topics = data;
        console.log('The array contents are: ', this.topics);
        console.log('The length of array is ', this.topics.length);
        if(this._actRoute.snapshot.children.length === 0) {
          this.isFirstSubTopic = true;
          this.routeToSubTopicContent(this.topics[0]);
        }
        else {
          this.isFirstSubTopic = false;
        }
      },
      err => {
        console.log('Error is ', err);
      }
    );

    // this._router.navigate('')
  }

  routeToSubTopicContent(subTopic: subTopicModel) {
    this._router.navigate([subTopic.subTopicId], {
      relativeTo: this._actRoute
    });
  }

  refreshMainPage(template, subTopic: subTopicModel ) {
    //this._router.navigate([this.courseName,"MainPage"],{relativeTo:this._route});
    // this._router.navigate([this.courseName,"MainPage"],{relativeTo:this._route});
    if (this.lastTemplate != undefined) {
      this.lastTemplate.color = 'row';
    }

    console.log('Refresh main page contents are: ', subTopic.subTopic);
    // template.setAttribute("class","colorDiv");
    template.color = 'primary';
    console.log('contents template is ', template);
    this.lastTemplate = template;
    // template._color="warn";
    this.routeToSubTopicContent(subTopic);
  }
}
