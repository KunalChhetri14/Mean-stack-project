import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { CourseSideTopicComponent } from './course-side-topic/course-side-topic.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { MainContentPageComponent } from './main-content-page/main-content-page.component';

const routes: Routes = [
  // {
  //   path:'',redirectTo:'/ViewCourses',pathMatch:'full'
  // },
  {
    path: 'ViewCourses',
    component: CourseComponentComponent
  },
  {
    path: 'ViewCourses/:CourseName',
    component: CourseSideTopicComponent,
    children: [
      {
        path: ':Main',
        component: MainContentPageComponent
      }
    ]
  },
  {
    path: '',
    component: LoginOrRegisterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
