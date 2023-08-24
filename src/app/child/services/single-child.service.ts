import { Injectable } from '@angular/core';
import { SingleParentService } from 'src/app/parent/services/single-parent.service';

@Injectable({
    providedIn: 'root'
})
export class SingleChildService extends SingleParentService {

    constructor() {
        super();
    }

    setStatusToCero(): void {
        this.status.next(0);
    }
}
