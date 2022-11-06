import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const API_URL = 'http://localhost:3000';

@Injectable({ // única instância para toda a minha aplicação
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokeSenvice: TokenService) {}

  authenticate(userName: string, password: string){
    return this.http
      .post(
        API_URL + '/user/login',
        { userName, password },
        { observe: 'response' }  // expor o headers para ser manipulado
      )
      .pipe( // operações arbritárias // Pipes let you combine multiple functions into a single function. // https://angular.io/guide/rx-library
        tap(res => {
          const authToken = res.headers.get('x-access-token');
          this.tokeSenvice.setToken(authToken);
          console.log(`User ${userName} authenticated with token ${authToken}`);
        })
      );
  }
}
