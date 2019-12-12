import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { CourseSideTopicComponent } from './course-side-topic/course-side-topic.component';

const routes: Routes = [
 
  {
    path:'ViewCourses',
    component: CourseComponentComponent
  },
  {
    path:'course/:Kunal',
    component:CourseSideTopicComponent
  },
  {
    path: '',
    component: LoginOrRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
