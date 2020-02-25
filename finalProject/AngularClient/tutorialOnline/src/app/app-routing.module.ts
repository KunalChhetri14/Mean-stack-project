import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { CourseSideTopicComponent } from './course-side-topic/course-side-topic.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { MainContentPageComponent } from './main-content-page/main-content-page.component';
import {AdminCreatPostComponent} from './admin-creat-post/admin-creat-post.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // {
  //   path:'',redirectTo:'/ViewCourses',pathMatch:'full'
  // },
  {
    path:'admin',
    component: AdminCreatPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ViewCourses',
    component: CourseComponentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ViewCourses/:CourseName',
    component: CourseSideTopicComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':Main',
        component: MainContentPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ViewCourses',
    pathMatch: 'full'
  },
  {
    path: 'login',
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
