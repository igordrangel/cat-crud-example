import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatServiceBase } from '@catrx/ui/common';
import { CatTokenService } from '@catrx/ui/core';
import { CatDatatableDataHttpResponse } from '@catrx/ui/datatable';
import { koala } from '@koalarx/utils';
import { first, Observable } from 'rxjs';
import { Credentials } from './user.interface';

@Injectable({ providedIn: 'any' })
export class UserService extends CatServiceBase {
  constructor(
    httpClient: HttpClient,
    private tokenService: CatTokenService
  ) {
    super(httpClient, 'user');
  }

  public auth(credentials: Credentials) {
    return new Observable(observe => {
      setTimeout(() => {
        this.tokenService.setDecodedToken(
          {
            login: credentials.username,
            expired: koala('now')
              .date()
              .add({ qtd: 1, type: 'days' })
              .getValue(),
          },
          'secret'
        );
        observe.next();
        observe.complete();
      }, 1000);
    });
  }

  getDatatable(filter: any): Observable<CatDatatableDataHttpResponse<any>> {
    throw new Error('Method not implemented.');
  }
}
