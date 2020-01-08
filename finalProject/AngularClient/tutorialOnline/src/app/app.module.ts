import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponentComponent } from './course-component/course-component.component';
import { CourseSideTopicComponent } from './course-side-topic/course-side-topic.component';
import { MainContentPageComponent } from './main-content-page/main-content-page.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './auth.guard';
import { ServiceTutorialOnlineService } from './service-tutorial-online.service';
import { AdminCreatPostComponent } from './admin-creat-post/admin-creat-post.component';
import {QuillModule,QUILL_CONFIG_TOKEN} from 'ngx-quill';
import {resize} from 'quill-image-resize-module'


@NgModule({
  declarations: [
    AppComponent,
    LoginOrRegisterComponent,
    CourseComponentComponent,
    CourseSideTopicComponent,
    MainContentPageComponent,
    PageNotFoundComponentComponent,
    AdminCreatPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    FlexLayoutModule,
    QuillModule.forRoot(QUILL_CONFIG_TOKEN.ngInjectableDef)
  ],
  providers: [ServiceTutorialOnlineService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
