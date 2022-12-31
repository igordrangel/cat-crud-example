import { Component } from '@angular/core';
import { CatAppService } from '@catrx/ui/core';
import { UserService } from './shared/services/user/user.service';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  appConfig = this.appService
    .build('Pet Shop', {
      autoAuth: true,
      jwt: {
        loginComponent: LoginComponent,
      },
      onAuth: (decodedToken) => this.userService.getMenu(decodedToken),
    })
    .setLogotype({
      default: '../assets/logotype.svg',
      negative: '../assets/logotype-negative.svg',
    })
    .enableDarkMode()
    .generate();

  constructor(
    private appService: CatAppService,
    private userService: UserService
  ) {}
}
