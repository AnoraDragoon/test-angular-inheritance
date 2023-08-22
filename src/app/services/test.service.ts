import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TestService {

private status: Subject<string> = new Subject();
public status$: Observable<string> = this.status.asObservable();

    constructor() { }
}
