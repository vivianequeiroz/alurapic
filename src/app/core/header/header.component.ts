import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
    
export class HeaderComponent {

    user$: Observable<User>;

    constructor(userService: UserService) {
        this.user$ = userService.getUser();
    }
}