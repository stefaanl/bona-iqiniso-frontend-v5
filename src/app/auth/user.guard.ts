import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {StorageService} from "../generic-services/storage.service";

export const userGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const router = inject(Router)
  //console.log('is user authenticated: ', storage.isAuthenticated());
  if (!storage.isAuthenticated()) {
    //router.navigateByUrl("/login");
    return false;
  }
  //console.log('is user: ', storage.isUser());

  if (!storage.isUser()) {
    //router.navigateByUrl("/login");
    return false;
  };


  return true;


};
