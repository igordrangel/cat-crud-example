import { Component } from '@angular/core';
import { CatLogotypeApp } from '@catrx/ui/core';
import { CatFormModule, CatFormService } from '@catrx/ui/form';
import { CatPrimaryButtonComponent } from '@catrx/ui/button';
import {
  CatDynamicComponentDataInterface,
  CatDynamicComponentModule,
} from '@catrx/ui/dynamic-component';
import { CatFormBase } from '@catrx/ui/common';
import { UserService } from './shared/services/user/user.service';
import { Credentials } from './shared/services/user/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <form (submit)="submit($event)">
      <cat-dynamic-component class="logotype" [component]="data">
      </cat-dynamic-component>

      <cat-form #form [config]="loginFormConfig"> </cat-form>

      <cat-primary-button type="submit" [showLoader]="submitLoader$ | async" class="w-100">
        Entrar
      </cat-primary-button>
    </form>
  `,
  styles: [
    `
      form {
        width: 250px;
      }
      .logotype {
        display: block;
        width: 100px;
        height: 100px;
        margin: 0 auto 20px;
      }
    `,
  ],
  standalone: true,
  imports: [
    CommonModule,
    CatDynamicComponentModule,
    CatFormModule,
    CatPrimaryButtonComponent,
  ],
})
export class LoginComponent
  extends CatFormBase
  implements CatDynamicComponentDataInterface
{
  data: CatLogotypeApp;

  loginFormConfig = this.formService
    .build<Credentials>()
    .text('Usuário', 'username', (builder) => builder.focus().setRequired().generate())
    .password('Senha', 'password', (builder) =>
      builder.setRequired().generate()
    )
    .onSubmit((data) => this.userService.auth(data))
    .generate();

  constructor(
    private formService: CatFormService,
    private userService: UserService
  ) {
    super();
  }
}
