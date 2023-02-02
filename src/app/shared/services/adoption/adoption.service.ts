import { klArray } from '@koalarx/utils/operators/array';
import { Injectable } from '@angular/core';
import { CatServiceBase } from '@catrx/ui/common';
import { HttpClient } from '@angular/common/http';
import { CatDatatableDataHttpResponse } from '@catrx/ui/datatable';
import { PetFilter, Pet } from './adoption.interface';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({ providedIn: 'root' })
export class AdoptionService extends CatServiceBase<
  PetFilter,
  Array<Pet>,
  Pet
> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'adoption', {
      useMockup: true,
      mockupStartBase: [
        {
          id: 1,
          race: 'Frajola',
          sex: 'M',
          weight: '7Kg',
          yearsOld: '3 anos',
          vacines: [
            {name: 'V5', dateApplied: '2023-01-05'}
          ]
        }
      ]
    });
  }

  getDatatable(
    filter: PetFilter
  ): Observable<CatDatatableDataHttpResponse<Pet>> {
    return this.getAll().pipe(map((petsBase) => {
      const pets = klArray(petsBase)
        .filter(filter?.race ?? '', 'race')
        .filter(filter?.sex ?? '', 'sex')
        .getValue();

      return {
        items: pets,
        count: pets.length
      };
    }));
  }

  exportPets(filter: PetFilter) {
    return this.exportByService(() => this.getDatatable(filter));
  }
}
