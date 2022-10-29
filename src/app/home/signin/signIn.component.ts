import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html',
})

export class SignInComponent implements OnInit{

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
    ){} // injecao

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['alura', Validators.required],
      password: ['12345678', Validators.required]
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
