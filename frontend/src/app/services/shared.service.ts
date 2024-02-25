import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private dataChangeSource = new Subject<void>();
    dataChanged$ = this.dataChangeSource.asObservable();

    constructor() {
    }

    emitDataChange() {
        this.dataChangeSource.next();
    }
}
