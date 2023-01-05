import { Injectable } from '@angular/core';
import { AppConfigMenu, CatAppDecodedToken } from '@catrx/ui/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'any' })
export class AppService {
  constructor() {}

  public getMenu(decodedToken: CatAppDecodedToken) {
    return new Observable<AppConfigMenu>((observe) => {
      observe.next({
        modules: [
          {
            icon: 'fa-solid fa-paw',
            name: 'Adoção',
            routerLink: '/adoption',
            hasPermission: () => !!decodedToken
          },
        ],
      });
    });
  }
}
