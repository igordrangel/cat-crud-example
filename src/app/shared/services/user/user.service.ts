import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatServiceBase } from '@catrx/ui/common';
import { CatTokenService } from '@catrx/ui';
import { CatDatatableDataHttpResponse } from '@catrx/ui/datatable';
import { Credentials } from './user.interface';
import { Observable } from 'rxjs/internal/Observable';

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
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);

        this.tokenService.setDecodedToken(
          {
            login: credentials.username,
            expired: currentDate,
          },
          'secret'
        );
        observe.next();
        observe.complete();
      }, 1000);
    });
  }

  getDatatable(): Observable<CatDatatableDataHttpResponse<never>> {
    throw new Error('Method not implemented.');
  }
}
