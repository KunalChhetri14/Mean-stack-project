import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators,} from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import Quill from 'quill';
import {resize} from 'quill-image-resize-module';
import { ServiceTutorialOnlineService } from '../../core/services/course-services/service-tutorial-online.service';
import {MatSelect} from '@angular/material/select';
import { AdminServiceService } from '../../core/services/admin-services/admin-service.service';

@Component({
  selector: 'app-admin-creat-post',
  templateUrl: './admin-creat-post.component.html',
  styleUrls: ['./admin-creat-post.component.css']
})
export class AdminCreatPostComponent implements OnInit {
  PostForm: FormGroup;
  editorStyle={
    height:'300px',
    width:'200px'
  }

  contentUpload;
editor_modules = {
    toolbar: {
      container: [
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link', 'image']
      ]
    },
    resize: {}
  };
  courseArr: Array<string>;
  constructor(private _adminservice:AdminServiceService,private _service:ServiceTutorialOnlineService,private fb:FormBuilder) { 
    this.PostForm=this.fb.group({
      'Course':['',
                [Validators.required]

      ],
      'Title':['',
                [Validators.required]  
            ],
      'editor': ['',
                [Validators.required]
              ],
       'SubmitButton': []

    })
    
  }

  ngOnInit() {
    this._service.getAllCourses().subscribe(
      data=>{
        this.courseArr=data;
      })
      err=>{
        console.log('the error status is',err);
      }
    

  }

  changeCall(){

  }

  


  postData(renderContent){
    console.log("inside subsmi");
    console.log(this.PostForm.value);
    this.contentUpload=this.PostForm.get('editor').value;
    renderContent.innerHTML=this.contentUpload;
  }

  submitData(){
    console.log(this.PostForm.value);
    this._adminservice.insertNewContent(this.PostForm.value).subscribe(data=>{
      console.log("succesfully inserted ",data);

    },
    err=>{
      console.log('error ');
    });
  }

}
