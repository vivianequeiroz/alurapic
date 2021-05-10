import { ErrorHandler } from '@angular/core';
import * as StacktTrace from 'stacktrace-js';


export class GlobalErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        console.log('Passou por error handler');
        throw error;
    }
}