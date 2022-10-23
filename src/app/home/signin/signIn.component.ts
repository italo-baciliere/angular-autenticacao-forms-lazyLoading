import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './signin.component.html',
})

export class SignInComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder){} // injecao

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


}

/*
Sendo assim, utilizaremos a Model Driven Forms, cuja regra de validação
ficará no componente, e não no template. Isto é, programaremos as regras
de validação, e por consequência teremos type checking, autocomplete,
tudo que o TypeScript tem a nos oferecer.
*/
