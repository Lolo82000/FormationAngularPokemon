import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {

    isLoggedIn: boolean = false; //Utilisateur est-il connecté ?
    redirectUrl: string; //Ou le rediriger

    login(name: string, password: string): Observable<boolean> {
        let isLoggedIn = (name === 'admin' && password === 'admin');

        return of(true).pipe(
            delay(1000),
            tap(() => this.isLoggedIn = isLoggedIn)
        );
    }

    logout() {
        this.isLoggedIn = false;
    }
}
