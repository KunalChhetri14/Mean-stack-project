import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOrRegisterComponent } from './+core-modules/+auth/login-or-register/login-or-register.component';
import { CourseComponentComponent } from './+features/course-component/course-component.component';
import { CourseSideTopicComponent } from './+features/course-side-topic/course-side-topic.component';
import { PageNotFoundComponentComponent } from './+features/page-not-found-component/page-not-found-component.component';
import { MainContentPageComponent } from './+features/main-content-page/main-content-page.component';
import {AdminCreatPostComponent} from './+features/admin-creat-post/admin-creat-post.component';
import { AuthGuard } from './core/auth-guard/auth.guard';

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
