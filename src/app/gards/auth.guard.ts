import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let _UserAuthService=inject(UserAuthService);
  let _router=inject(Router);
  if(_UserAuthService.getUserLogined())
  {
    return true;
  }
  else{
    _router.navigateByUrl('/Logine');
    return false;
  }
  
};
