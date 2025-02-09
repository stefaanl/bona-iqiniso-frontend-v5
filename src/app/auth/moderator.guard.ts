import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {StorageService} from "../generic-services/storage.service";

export const moderatorGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const router = inject(Router)

  if (!storage.isAuthenticated()) {
    //router.navigateByUrl("/login");
    return false;
  };

  if (!storage.isModerator()) {
    //router.navigateByUrl("/login");
    return false;
  };


  return true;


};
