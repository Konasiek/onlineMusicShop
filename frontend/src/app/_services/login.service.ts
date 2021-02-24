import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    isLogIn: boolean;

    constructor() {
    }

    @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

    changeLoginInStatus(isLogIn: boolean) {
        this.isLogIn = isLogIn;
        this.change.emit(this.isLogIn);
    }
}
