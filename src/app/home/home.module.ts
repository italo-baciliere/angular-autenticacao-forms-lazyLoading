import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin/signIn.component';
/* utilizaremos a Model Driven Forms, cuja regra de validação ficará no componente,
e não no template. Isto é, programaremos as regras de validação, e por consequência
teremos type checking, autocomplete, tudo que o TypeScript tem a nos oferecer.*/
import { ReactiveFormsModule} from '@angular/forms' //  capacidade de lidar com diversos casos de validação em nosso código.
import { VMessageModule } from '../shared/components/vmessage/vmessage.modele';

@NgModule({
  declarations: [ SignInComponent ],
  imports: [ CommonModule, ReactiveFormsModule, VMessageModule ]
})

export class HomeModule{
}
