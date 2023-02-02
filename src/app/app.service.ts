import { Injectable } from '@angular/core';
import { AppConfigMenu, CatAppDecodedToken } from '@catrx/ui';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'any' })
export class AppService {
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
