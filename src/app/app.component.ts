import { Component } from '@angular/core';
import { CatAppService } from '@catrx/ui/core';
import { LoginComponent } from './login.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  appConfig = this.catappService
    .build('PetShop', {
      autoAuth: true,
      startedPage: 'adoption',
      jwt: {
        loginComponent: LoginComponent,
      },
      onAuth: (decodedToken) => this.appService.getMenu(decodedToken),
    })
    .setLogotype({
      default: '../assets/logotype.svg',
      negative: '../assets/logotype-negative.svg',
    })
    .enableDarkMode()
    .generate();

  constructor(
    private catappService: CatAppService,
    private appService: AppService
  ) {}
}
