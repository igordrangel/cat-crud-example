import { Injectable } from '@angular/core';
import { AppConfigMenu, CatAppDecodedToken } from '@catrx/ui/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'any' })
export class UserService {
  public getMenu(decodedToken: CatAppDecodedToken) {
    return new Observable<AppConfigMenu>((observe) => {
      observe.next({
        modules: [
          {
            icon: 'fa-solid fa-paw',
            name: 'Adoção',
            tools: [
              {
                name: 'Gatos',
                hasPermission: () => !!decodedToken,
                routerLink: '/adocao/gatos',
              },
            ],
          },
        ],
      });
    });
  }
}
