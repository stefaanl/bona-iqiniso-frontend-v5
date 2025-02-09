import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {LabelService} from "../services/label.service";
import {V3BiLabelBase} from "../models/V3BiLabelBase";
import {V3BiAlertValidationBase} from "../models/V3BiAlertValidationBase";
import {PasseViteService} from "../genericServices/passe-vite.service";
import {HttpMessageService} from "../genericServices/http-message.service";
import {MessageService} from "../genericServices/message.service";

@Injectable({
  providedIn: 'root'
})
export class LabelValidationHandlerService {
  @Output() trigger: EventEmitter<string> = new EventEmitter<string>();

  isValid: boolean = true;
  constructor(
    private passeviteService: PasseViteService,
    private labelService: LabelService,
    private messageService: MessageService,
    private httpMessageService: HttpMessageService
  ) {
    this.isValid = true;
  }
  validateAdd(): void {
    this.validateAddProcessing().subscribe(
      isValid => {
        console.log('LabelEventHandler - ngOnInit - label add submit: isValid - ', isValid);
        if (isValid) {
          console.log('Label is valid - label add save success');
          this.trigger.emit('label add save success');
        } else {
          console.log('Label validation failed - label add save fail.');
          this.trigger.emit('label add save fail');
        }
      },
      error => {
        console.error('An error occurred during validation:', error);
        console.log('LabelEventHandler - ngOnInit - label add submit: error - ', error, ' - label add save fail');
        this.trigger.emit('label add save fail');
      }
    );
  }
  validateUpdate(): void {
    this.validateUpdateProcessing().subscribe(
      isValid => {
        console.log('LabelEventHandler - ngOnInit - label update submit: isValid - ', isValid);
        if (isValid) {
          console.log('Label is valid.');
          this.trigger.emit('label edit save success');
        } else {
          console.log('Label validation failed.');
          this.trigger.emit('label edit save fail');
        }
      },
      error => {
        console.error('An error occurred during validation:', error);
        console.log('LabelEventHandler - ngOnInit - label update submit: error - ', error);
        this.trigger.emit('label edit save fail');
      }
    );
  }
  validateDelete(): void {
    this.validateDeleteProcessing().subscribe(
      isValid => {
        console.log('LabelEventHandler - ngOnInit - label delete submit: isValid - ', isValid);
        if (isValid) {
          console.log('Label is valid.');
          this.trigger.emit('label delete save success');
        } else {
          console.log('Label validation failed.');
          this.trigger.emit('label delete save fail');
        }
      },
      error => {
        console.error('An error occurred during validation:', error);
        console.log('LabelEventHandler - ngOnInit - label delete submit: error - ', error);
        this.trigger.emit('label delete save fail');
      }
    );
  }

  validateAddProcessing(): Observable<boolean> {
    console.log('LabelValidationHandler - validateAdd: start');
    // Step 1: Fetch V3BiLabelBase from the passeviteService
    const labelToVerify: V3BiLabelBase = this.passeviteService.get('label');
    this.messageService.clearAlertsByReference()
    console.log('LabelValidationHandler - validateAdd: labelToVerify - ', labelToVerify);

    // Step 2: Direct validations
    const directValidations$ = this.performDirectValidations(labelToVerify);
    console.log('LabelValidationHandler - validateAdd: directValidations$ - ', directValidations$);
    // Step 3: Async validation
    const asyncValidations$ = directValidations$.pipe(
      switchMap(isValid => {
        console.log('LabelValidationHandler - validateAdd: directValidations$ - isValid - ', isValid);

        if (!isValid) {
          return of(false);
        }
        return this.labelService.uniqueLabelByReference(labelToVerify.reference).pipe(
          map(isUnique => {
            if (!isUnique) {
              this.messageService.addAlertByReferences(new V3BiAlertValidationBase('reference-unique', 'reference'));
              return false;
            }
            return true;
          }),
          catchError(error => {
            this.messageService.addAlertByReferences(new V3BiAlertValidationBase(this.httpMessageService.getMsg(error.status), 'reference'));
            return of(false);
          })
        );
      })
    );

    // Step 4: Async HTTP validation
    const httpValidations$ = asyncValidations$.pipe(
      switchMap(isValid => {
        console.log('LabelValidationHandler - validateAdd: asyncValidations$ - isValid - ', isValid);
        if (!isValid) {
          return of(false);
        }
        return this.labelService.addLabel(labelToVerify).pipe(
          map(response => {
            this.messageService.addAlertByReferences(new V3BiAlertValidationBase('create-success', undefined));
            console.log('LabelValidationHandler - validateAdd: httpValidations$ - response - ', response);

            return true;
          }),
          catchError(error => {
            this.messageService.addAlertByReferences(new V3BiAlertValidationBase(this.httpMessageService.getMsg(error.status), undefined));
            console.log('LabelValidationHandler - validateAdd: httpValidations$ - error - ', error);

            return of(false);
          })
        );
      })
    );

    return httpValidations$;
  }
  validateUpdateProcessing(): Observable<boolean> {
    console.log('LabelValidationHandler - validateUpdate: start');
    // Step 1: Fetch V3BiLabelBase from the passeviteService
    const labelToVerify: V3BiLabelBase = this.passeviteService.get('label');
    this.messageService.clearAlertsByReference()
    console.log('LabelValidationHandler - validateUpdate: labelToVerify - ', labelToVerify);

    // Step 2: Direct validations
    const directValidations$ = this.performDirectValidations(labelToVerify);
    console.log('LabelValidationHandler - validateUpdate: directValidations$ - ', directValidations$);
    // Step 3: Async validation
    const asyncValidations$ = directValidations$.pipe(
      switchMap(isValid => {
        console.log('LabelValidationHandler - validateUpdate: directValidations$ - isValid - ', isValid);

        if (!isValid) {
          return of(false);
        }
        return this.labelService.existLabelByReference(labelToVerify.reference).pipe(
          map(exists => {
            if (!exists) {
              this.messageService.addAlertByReferences(new V3BiAlertValidationBase('alert-not-exists', 'reference'));
              return false;
            }
            return true;
          }),
          catchError(error => {
            this.messageService.addAlertByReferences(new V3BiAlertValidationBase(this.httpMessageService.getMsg(error.status), 'reference'));
            return of(false);
          })
        );
      })
    );

    // Step 4: Async HTTP validation
    const httpValidations$ = asyncValidations$.pipe(
      switchMap(isValid => {
        console.log('LabelValidationHandler - validateUpdate: asyncValidations$ - isValid - ', isValid);
        if (!isValid) {
          return of(false);
        }
        return this.labelService.updateLabel(labelToVerify).pipe(
          map(response => {
            this.messageService.addAlertByReferences(new V3BiAlertValidationBase('update-success', undefined));
            console.log('LabelValidationHandler - validateUpdate: httpValidations$ - response - ', response);

            return true;
          }),
          catchError(error => {
            this.messageService.addAlertByReferences(new V3BiAlertValidationBase(this.httpMessageService.getMsg(error.status), undefined));
            console.log('LabelValidationHandler - validateUpdate: httpValidations$ - error - ', error);

            return of(false);
          })
        );
      })
    );

    return httpValidations$;
  }
  validateDeleteProcessing(): Observable<boolean> {
    console.log('LabelValidationHandler - validateDelete: start');
    // Step 1: Fetch V3BiLabelBase from the passeviteService
    const labelToVerify: V3BiLabelBase = this.passeviteService.get('label');
    this.messageService.clearAlertsByReference()
    console.log('LabelValidationHandler - validateDelete: labelToVerify - ', labelToVerify);

    // Step 2: Direct validations - Not Applicable
    const directValidations$ = this.performDirectValidations(labelToVerify);
    console.log('LabelValidationHandler - validateUpdate: directValidations$ - ', directValidations$);
    // Step 3: Async validation - Not Applicable
    const asyncValidations$ = directValidations$.pipe(
      switchMap(isValid => {
        console.log('LabelValidationHandler - validateDelete: directValidations$ - isValid - ', isValid);
        if (!isValid) {
          return of(false);
        }
        return of(true);
      })
    );

    // Step 4: Async HTTP validation
    const httpValidations$ = asyncValidations$.pipe(
      switchMap(isValid => {
        console.log('LabelValidationHandler - validateDelete: asyncValidations$ - isValid - ', isValid);
        if (!isValid) {
          return of(false);
        }
        return this.labelService.deleteLabel(labelToVerify.reference).pipe(
          map(response => {
            this.messageService.addAlertByReferences(new V3BiAlertValidationBase('delete-success', undefined));
            console.log('LabelValidationHandler - validateDelete: httpValidations$ - response - ', response);

            return true;
          }),
          catchError(error => {
            this.messageService.addAlertByReferences(new V3BiAlertValidationBase(this.httpMessageService.getMsg(error.status), undefined));
            console.log('LabelValidationHandler - validateDelete: httpValidations$ - error - ', error);

            return of(false);
          })
        );
      })
    );

    return httpValidations$;
  }

  private performDirectValidations(labelToVerify: V3BiLabelBase): Observable<boolean> {
    return of(true);
  }
}
