import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {StorageService} from "../genericServices/storage.service";

export const authGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const router = inject(Router)
  //console.log('authGuard: ', storage.getUser());
  //console.log('authGuard: ', storage.isAuthenticated());
  if (storage.isAuthenticated()) return true;
  //router.navigateByUrl("/login");
  return false;


};
