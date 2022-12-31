import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatToolbarModule } from '@catrx/ui/toolbar';
import { CatDialogModule } from '@catrx/ui/dialog';
import { CatDatatableModule } from '@catrx/ui/datatable';
import { PageAdocaoComponent } from './page-adocao.component';
import { PageAdocaoRoutingModule } from './page-adocao.routing.module';
import { CatFormModule } from '@catrx/ui/form';
import { DialogPetComponent } from './components/dialog-pet/dialog-pet.component';
import { PetPhotoComponent } from './components/pet-photo/pet-photo.component';
import { CatDynamicComponentModule } from '@catrx/ui/dynamic-component';

@NgModule({
  declarations: [PageAdocaoComponent, DialogPetComponent, PetPhotoComponent],
  imports: [
    CommonModule,
    CatToolbarModule,
    CatDialogModule,
    CatFormModule,
    CatDatatableModule,
    CatDynamicComponentModule,
    PageAdocaoRoutingModule,
  ],
})
export class PageAdocaoModule {}
