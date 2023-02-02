import { AppPageComponent } from './../../shared/components/app-page/app-page.componnet';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatPrimaryButtonComponent } from '@catrx/ui/button/primary';
import { CatConfirmModule } from '@catrx/ui/confirm';
import { CatDatatableModule } from '@catrx/ui/datatable';
import { CatDialogModule } from '@catrx/ui/dialog';
import { CatFormModule } from '@catrx/ui/form';
import { CatIconButtonModule } from '@catrx/ui/icon-button';
import { PageAdoptionComponent } from './page-adoption.component';
import { PageAdoptionRoutingModule } from './page-adoption.routing.module';

@NgModule({
  declarations: [PageAdoptionComponent],
  imports: [
    CommonModule,
    AppPageComponent,
    CatFormModule,
    CatDatatableModule,
    CatDialogModule,
    CatConfirmModule,
    CatIconButtonModule,
    CatPrimaryButtonComponent,
    PageAdoptionRoutingModule
  ],
})
export class PageAdoptionModule {}
