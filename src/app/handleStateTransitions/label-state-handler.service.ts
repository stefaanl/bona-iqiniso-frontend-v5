import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {BreadcrumbService} from "../generic-services/breadcrumb.service";
import {MessageService} from "../generic-services/message.service";

@Injectable({
    providedIn: 'root',
})
export class LabelStateHandlerService {

  constructor(
    private router: Router,
    private breadcrumb: BreadcrumbService,
    private messageService: MessageService
  ) {
  }
  execute(event: string, state: string): string | undefined {
    console.log('LabelStateHandler: ', event, ' and start state: ', state);
    switch(event){
      case 'default':
        this.messageService.clearAlertsByReference()
        return 'label list';
      case 'label list cancel':
        this.messageService.clearAlertsByReference()
        return 'label exit';
      case 'label goto add':
        this.messageService.clearAlertsByReference()
        return 'label add';
      case 'label goto edit':
        this.messageService.clearAlertsByReference()
        return 'label edit';
      case 'label goto detail':
        this.messageService.clearAlertsByReference()
        return 'label detail';
      case 'label goto delete':
        this.messageService.clearAlertsByReference()
        return 'label delete';
      case 'label add save fail':
        return 'label add';
      case 'label edit update fail':
        return 'label edit';
      case 'label delete confirm fail':
        return 'label delete';
      case 'label add cancel':
        this.messageService.clearAlertsByReference()
        return 'label list';
      case 'label edit cancel':
        this.messageService.clearAlertsByReference()
        return 'label list';
      case 'label detail cancel':
        this.messageService.clearAlertsByReference()
        return 'label list';
      case 'label delete cancel':
        this.messageService.clearAlertsByReference()
        return 'label list';
      case 'label add save success':
        return 'label list';
      case 'label edit update success':
        return 'label list';
      case 'label delete confirm success':
        return 'label list';
      default:
        return 'label list';
    }
    return undefined;
  }
}
