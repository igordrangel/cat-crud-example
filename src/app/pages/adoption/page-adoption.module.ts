import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatPrimaryButtonComponent } from '@catrx/ui/button';
import { CatConfirmModule } from '@catrx/ui/confirm';
import { CatDatatableModule } from '@catrx/ui/datatable';
import { CatDialogModule } from '@catrx/ui/dialog';
import { CatFormModule } from '@catrx/ui/form';
import { CatIconButtonModule } from '@catrx/ui/icon-button';
import { CatToolbarModule } from '@catrx/ui/toolbar';
import { PageAdoptionComponent } from './page-adoption.component';
import { PageAdoptionRoutingModule } from './page-adoption.routing.module';

@NgModule({
  declarations: [PageAdoptionComponent],
  imports: [
    CommonModule,
    CatToolbarModule,
    CatFormModule,
    CatDatatableModule,
    CatDialogModule,
    CatConfirmModule,
    CatIconButtonModule,
    CatPrimaryButtonComponent,
    PageAdoptionRoutingModule,
  ],
})
export class PageAdoptionModule {}
