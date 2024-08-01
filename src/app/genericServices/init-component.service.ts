import { Injectable } from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {ComponentService} from "../services/component.service";
import {ImageService} from "../services/image.service";
import {AlertService} from "../services/alert.service";
import {LabelService} from "../services/label.service";
import {FreeTextService} from "../services/free-text.service";
import {PasseViteService} from "./passe-vite.service";
import {V3BiComponentBase} from "../models/V3BiComponent";
import {V3BiImageBase} from "../models/V3Bi-Image";
import {V3BiFreeTextBase} from "../models/V3BiFreeTextBase";
import {V3BiAlertBase} from "../models/V3BiAlertBase";
import {V3BiLabelBase} from "../models/V3BiLabelBase";

@Injectable({
  providedIn: 'root'
})
export class InitComponentService {
  componentLoaded: boolean = false;
  descriptionLoaded: boolean = false;
  imageLoaded: boolean = false;
  labelLoaded: boolean = false;
  alertLoaded: boolean = false;

  constructor(
    private componentService: ComponentService,
    private imageService: ImageService,
    private freetextService: FreeTextService,
    private alertService: AlertService,
    private labelService: LabelService,
    private passeViteService: PasseViteService
  ) {
    //console.log('InitComponentService created')
  }

  isLoaded(): boolean {
    return this.componentLoaded &&
      this.descriptionLoaded &&
      this.imageLoaded &&
      this.labelLoaded &&
      this.alertLoaded
  }

  getComponent(componentName: string): Observable<void> {
    this.passeViteService.reset('initComponent');
    this.passeViteService.reset('initDescription');
    this.passeViteService.reset('initImage');
    this.passeViteService.reset('initLabel');
    this.passeViteService.reset('initAlert');

    return this.componentService.getComponent([componentName]).pipe(
      tap((data: V3BiComponentBase[]) => {
        //console.log('InitComponentService.getComponent data', data);
        if (data.length > 0) {
          this.componentLoaded = true;
          const component = data[0];
          this.passeViteService.add('initComponent', component);
        }
      }),
      switchMap((data: V3BiComponentBase[]) => {
        if (data.length > 0) {
          const component = data[0];
          return forkJoin([
            this.getImage(component.image),
            this.getDescription(component.description),
            this.getAlerts(component.alerts),
            this.getLabels(component.labels)
          ]);
        } else {
          return of([]);
        }
      }),
      map(() => void 0)  // Use map to return void after all observables complete
    );
  }
  getImage(imageReference: string | undefined): Observable<void> {
    if (imageReference) {
      return this.imageService.getImage([imageReference]).pipe(
        tap((data: V3BiImageBase[]) => {
          if (data.length > 0) {
            this.imageLoaded = true;
            this.passeViteService.add('initImage', data[0]);
          }
        }),
        switchMap(() => of(void 0))
      );
    } else {
      this.imageLoaded = true;
      this.passeViteService.add('initImage', null);
      return of(void 0);
    }
  }

  getDescription(descriptionReference: string | undefined): Observable<void> {
    if (descriptionReference) {
      return this.freetextService.getFreeText([descriptionReference]).pipe(
        tap((data: V3BiFreeTextBase[]) => {
          if (data.length > 0) {
            this.descriptionLoaded = true;
            this.passeViteService.add('initDescription', data[0]);
            // Store or process the description as needed
          }
        }),
        switchMap(() => of(void 0))
      );
    } else {
      this.descriptionLoaded = true;
      this.passeViteService.add('initDescription', null);
      return of(void 0);
    }
  }

  getAlerts(alertReferences: string[] | undefined): Observable<void> {
    if (alertReferences === undefined) alertReferences = [];
    alertReferences.push('create-success');
    alertReferences.push('update-success');
    alertReferences.push('delete-success');
    alertReferences.push('bad-request');
    alertReferences.push('unauthorized');
    alertReferences.push('forbidden');
    alertReferences.push('not-found');
    alertReferences.push('method-not-allowed');
    alertReferences.push('internal-server-error');
    alertReferences.push('not-implemented');
    alertReferences.push('bad-gateway');
    alertReferences.push('service-unavailable');
    alertReferences.push('gateway-timeout');
    if (alertReferences && alertReferences.length > 0) {
      return this.alertService.getAlert(alertReferences).pipe(
        tap((data: V3BiAlertBase[]) => {
          if (data.length > 0) {
            this.alertLoaded = true;
            this.passeViteService.add('initAlert', data);
            // Process alerts as needed
          }
        }),
        switchMap(() => of(void 0))
      );
    } else {
      this.alertLoaded = true;
      this.passeViteService.add('initAlert', []);
      return of(void 0);
    }
  }

  getLabels(labelReferences: string[] | undefined): Observable<void> {
    if (labelReferences && labelReferences.length > 0) {
      return this.labelService.getLabel(labelReferences).pipe(
        tap((data: V3BiLabelBase[]) => {
          if (data.length > 0) {
            this.labelLoaded = true;
            // Process labels as needed
            this.passeViteService.add('initLabel', data);
          }
        }),
        switchMap(() => of(void 0))
      );
    } else {
      this.labelLoaded = true;
      this.passeViteService.add('initLabel', []);
      return of(void 0);
    }
  }
}
