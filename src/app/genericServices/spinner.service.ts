import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private spinner = new BehaviorSubject<boolean>(false);
    public readonly spinner$ = this.spinner.asObservable();

    constructor() {}

    show() {
        this.spinner.next(true);
    }

    hide() {
        this.spinner.next(false);
    }
}
