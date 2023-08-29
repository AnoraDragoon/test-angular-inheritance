import { Injectable } from '@angular/core';
import { SingleParentService } from 'src/app/parent';

@Injectable({
    providedIn: 'root'
})
export class CustomSingleChildService extends SingleParentService {

    constructor() {
        super();
    }

    setStatus(data: number): void {
        super.setStatus(data);
        console.log(`CustomSingleChildService: status setted to ${data}.`);
    }
}
