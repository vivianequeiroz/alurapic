import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
@NgModule ({
    declarations: [ SignInComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class HomeModule { }