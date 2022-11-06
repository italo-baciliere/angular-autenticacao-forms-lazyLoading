import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
})

export class SignInComponent implements OnInit{

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private platformDetectorService: PlatformDetectorService
    ){} // injecao

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['flavio', Validators.required],
      password: ['123', Validators.required]
    });
  }

  login(){
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.route.navigate(['user', userName]),
        err => {
          console.log('error')
          this.loginForm.reset();
          this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus(); // não executa se a primeir condição for false
          alert('Invalid user name or password')
        }
      );
  }


}

/*
Sendo assim, utilizaremos a Model Driven Forms, cuja regra de validação
ficará no componente, e não no template. Isto é, programaremos as regras
de validação, e por consequência teremos type checking, autocomplete,
tudo que o TypeScript tem a nos oferecer.
*/


/* AULA: Acesso do header de resposta
Lógica por tras da autenticação

  - Requisição para a API, e aguardar pelo objeto de resposta que representa o usuário (username e senha)
  - Com o sucesso nós recebemos uma resposta (retorno da requisição)
  - No cabeçalho da resposta, contém um x-access-token criptografado (base 64)
  - Precisamo guardar este token, para utilzarmos em acessos que precisem de autorização
  - O back-end sempre irá fazer a verificação do token, descriptografando-o
  - Será sempre feita a verificação da validade do token, pois ele possui um tempo de validade
*/
