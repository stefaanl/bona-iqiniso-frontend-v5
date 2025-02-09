import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {StorageService} from "../generic-services/storage.service";

export const adminGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const router = inject(Router)

  if (!storage.isAuthenticated()) {
    //router.navigateByUrl("/login");
    return false;
  };

  if (!storage.isAdmin()) {
    //router.navigateByUrl("/login");
    return false;
  };


  return true;


};
export const adminChildrenGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
