import { CatFormListOptions } from "@catrx/ui/form";

export interface Pet {
  id?: number;
  race: string;
  sex: PetSexType;
  weight: string;
  vacines: PetVacines[];
  yearsOld?: string;
}

export type PetSexType = 'M' | 'F';
export const PetSexOptions: CatFormListOptions[] = [
  { value: 'M', name: 'Macho' },
  { value: 'F', name: 'Fêmea' },
];
export interface PetVacines {
  name: string;
  dateApplied: string;
}

export interface PetFilter {
  race?: string;
  sex?: PetSexType;
}
