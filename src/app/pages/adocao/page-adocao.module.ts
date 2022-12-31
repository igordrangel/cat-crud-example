import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatToolbarModule } from '@catrx/ui/toolbar';
import { PageAdocaoComponent } from './page-adocao.component';
import { PageAdocaoRoutingModule } from './page-adocao.routing.module';

@NgModule({
  declarations: [PageAdocaoComponent],
  imports: [CommonModule, CatToolbarModule, PageAdocaoRoutingModule],
})
export class PageAdocaoModule {}
