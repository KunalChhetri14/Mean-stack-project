import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServiceTutorialOnlineService } from '../../core/services/course-services/service-tutorial-online.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _service: ServiceTutorialOnlineService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._service.loginedIn()) {
      return true;
    } else {
      this._router.navigateByUrl('/login');
      return false;
    }
  }
}
