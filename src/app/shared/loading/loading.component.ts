import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoadingService } from './loading.service';
import { LoadingType } from './loading.type';
@Component({
    selector: 'ap-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

    loading$: Observable<string>

    constructor(
        private loadingService: LoadingService
    ) {}

    ngOnInit(): void {
       
        this.loading$ = this.loadingService
            .getLoading()
            .pipe(map(loadingType => loadingType.valueOf()));
    }
 }