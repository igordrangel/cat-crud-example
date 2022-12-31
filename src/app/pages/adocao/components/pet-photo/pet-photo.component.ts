import { Component } from '@angular/core';
import { CatDynamicComponentDataInterface } from '@catrx/ui/dynamic-component';

@Component({
  template: `<img [src]="data" width="100" height="100"/>`,
  styles: [`img {border-radius: 50%;}`]
})
export class PetPhotoComponent implements CatDynamicComponentDataInterface {
  data?: string;
  constructor() {
    console.log(this.data);
  }
}
