import { Injectable } from '@angular/core';
import { StandardDepService } from 'src/app/parent/services/standard-dep.service';
import { Logger } from 'src/app/services/logger.service';

@Injectable({
    providedIn: 'root'
})
export class StandardDepChildService extends StandardDepService {

    constructor(protected logger: Logger) {
        super(logger);
    }

    setStatusToOne(): void {
        this.status.next(1);
    }
}
