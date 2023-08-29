import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Logger } from 'src/app/services/logger.service';

@Injectable({
    providedIn: 'root'
})
export class StandardDepService {

    protected readonly status = new BehaviorSubject<number>(0);
    public readonly status$: Observable<number> = this.status.asObservable();

    constructor(protected logger: Logger) { }


    setStatus(statusNumber: number): void {
        this.status.next(statusNumber);
        this.logger.log(`StandardDepService: status change to ${statusNumber}.`);
    }

}
