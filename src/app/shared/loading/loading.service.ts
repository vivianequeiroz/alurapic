import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { LoadingType } from './loading.type';

@Injectable({ providedIn: 'root' })
export class LoadingService { 

    loadingSubject = new Subject<LoadingType>();

    getLoading() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }
   
    stop() {
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}


// the service will be used by the interceptor to initiate or stop the loader component (used inside the header component)

// subjetc: the information send to it can be listen by a different location. In this, the subject receives info and the header component will be able to listen to it