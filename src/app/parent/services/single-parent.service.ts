import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleParentService {

    private readonly status = new BehaviorSubject<number>(0);
    public readonly status$: Observable<number> = this.status.asObservable();

    constructor() { }

    setStatus(data: number): void {
        this.status.next(data);
    }

    getStatus(): Observable<number> {
        return this.status$;
    }
}
