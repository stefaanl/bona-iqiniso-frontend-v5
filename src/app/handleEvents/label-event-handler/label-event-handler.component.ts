import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {LabelStateHandlerService} from "../../stateHandlers/label-state-handler.service";
import {LabelValidationHandlerService} from "../../validationHandlers/label-validation-handler.service";
import {Subscription} from "rxjs";
import {V3BiAlertValidationArray} from "../../models/V3BiAlertValidationArray";


@Component({
  selector: 'app-label-event-handler',
  templateUrl: './label-event-handler.component.html',
  styleUrls: ['./label-event-handler.component.css']
})
export class LabelEventHandlerComponent implements OnInit, OnChanges{
@Input() event: string | undefined;
@Input() state: string | undefined;

  @Output() newState: EventEmitter<string> = new EventEmitter<string>();
  @Output() trigger: EventEmitter<string> = new EventEmitter<string>();

  eventSubscription!: Subscription;

  constructor(
    private validationHandler: LabelValidationHandlerService,
    private stateHandler: LabelStateHandlerService
  ) {
    console.log('LabelEventHandler - constructor: event - ', this.event, ' and state- ', this.state);
  }
  onTrigger(event: any): void {
    console.log('LabelEventHandler - onTrigger: event - ', event);
    this.event = 'quack';
    this.trigger.emit(this.stateHandler.execute(event, <string>this.state));
  }
  ngOnInit(): void {
    this.eventSubscription = this.validationHandler.trigger.subscribe((message: string) => {
      console.log('LabelEventHandler - ngOnInit: eventSubscription - ', message);
      this.trigger.emit(message);
    });
    this.handler();
  }
  ngOnChanges(changes: SimpleChanges) {
    //console.log('AddLabelComponent: ngOnChanges');
    if (changes['event']) {
      this.handler()
    }
  }

  handler(): void {
    console.log('LabelEventHandler - handler: event - ', this.event, ' and state - ', this.state);
    if (this.event !== undefined && this.state !== undefined) {
      switch(this.event){
        case 'label add submit':
          console.log('LabelEventHandler - ngOnInit: start state - ', this.state, ' to end state - ???');
          this.event = undefined;
          this.validationHandler.validateAdd();
          break;
        case 'label edit submit':
          console.log('LabelEventHandler - ngOnInit: start state - ', this.state, ' to end state - ???');
          this.event = undefined;
          this.validationHandler.validateUpdate();
          break;
        case 'label delete submit':
          console.log('LabelEventHandler - ngOnInit: start state - ', this.state, ' to end state - ???');
          this.event = undefined;
          this.validationHandler.validateDelete();
          break;
        default:
          console.log('LabelEventHandler - ngOnInit: start state - ', this.state, ' to end state - ', this.stateHandler.execute(this.event, <string>this.state));
          this.newState.emit(this.stateHandler.execute(this.event, <string>this.state));
          break;
      }

    }
  }

}
