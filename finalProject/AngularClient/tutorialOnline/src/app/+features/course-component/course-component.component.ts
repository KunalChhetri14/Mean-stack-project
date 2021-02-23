import { Component, OnInit } from '@angular/core';
import { ServiceTutorialOnlineService } from '../../core/services/course-services/service-tutorial-online.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements OnInit {
  // courseArr = Array<string>;
  courseArr: Array<string>;
  courseName: string = '';
  courseUrl = 'course/';
  constructor(
    private _service: ServiceTutorialOnlineService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}
  ngOnInit() {
    this._service.getAllCourses().subscribe(
      data => {
        this.courseArr = data;
        console.log('course details fetched is', this.courseArr);
      },
      err => {
        console.log('The error status is ', err);
      }
    );
  }

  showContent(course) {
    this.courseName = course;
    this._router.navigate([this.courseName, ''], {
      relativeTo: this._route
    });
  }
}
