import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageAdocaoComponent } from './page-adocao.component';
import { CatAuthGuard } from '@catrx/ui/core';

const routes: Routes = [
  {
    path: ':type',
    component: PageAdocaoComponent,
    canActivate: [CatAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdocaoRoutingModule {}
