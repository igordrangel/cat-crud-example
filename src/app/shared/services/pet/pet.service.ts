import { Injectable } from "@angular/core";
import { koala } from "@koalarx/utils";
import { debounceTime, first } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';

export interface Pet {
  id?: number;
  photo: string;
  race: string;
  type: PetType;
}

export type PetType = 'gatos' | 'cachorros';

class PetDatabase {
  static pets: Pet[] = [];
}

@Injectable({ providedIn: 'root' })
export class PetService {
  public getAll() {
    return new Observable<Pet[]>((observe) =>
      observe.next(PetDatabase.pets)
    ).pipe(debounceTime(1000), first());
  }

  public save(pet: Pet, id?: number) {
    return new Observable<boolean>((observe) => {
      if (id) {
        const indexPet = koala(PetDatabase.pets).array().getIndex('id', id);
        if (indexPet >= 0) PetDatabase.pets[indexPet] = pet;
      } else {
        PetDatabase.pets.push(pet);
      }

      observe.next(true);
    }).pipe(debounceTime(1000), first());
  }
}
