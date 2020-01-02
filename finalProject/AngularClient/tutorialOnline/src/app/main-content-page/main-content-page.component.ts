import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceTutorialOnlineService } from '../service-tutorial-online.service';

@Component({
  selector: 'app-main-content-page',
  templateUrl: './main-content-page.component.html',
  styleUrls: ['./main-content-page.component.css']
})
export class MainContentPageComponent implements OnInit {
  constructor(
    private _service: ServiceTutorialOnlineService,
    private _actRoute: ActivatedRoute,
    private _router: Router
  ) {}
  contents = '';

  ngOnInit() {
    this._actRoute.paramMap.subscribe((params: ParamMap) => {
      let course_id = params.get('Main');
      console.log('THe link is ', course_id);
      let parentUrlPromise;
      if (course_id != '') {
        console.log('not empty ....  ', course_id);
        //   parentUrlPromise=new Promise(function(resolve,reject){
        //     this._actRoute.parent.url.subscribe(data=>{
        //       console.log("The data inside subscribe is ",data);

        //   })
        //   // console.log("The parent is ",this._actRoute.parent.url);
        // });
        let urlArray = [];
        let decodedUrl = decodeURIComponent(this._router.url);
        urlArray = decodedUrl.split('/');
        let courseName = urlArray[urlArray.length - 2];
        console.log('the parent is ', courseName);
        this._service
          .getSubTopicsContents(Number(course_id), courseName)
          .subscribe(data => {
            this.contents = data[0].content;
          });
      }
    });
  }
}
