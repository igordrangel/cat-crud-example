import { Routes, RouterModule } from '@angular/router';
import { CatAuthGuard } from '@catrx/ui/core';
import { PageAdoptionComponent } from './page-adoption.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: PageAdoptionComponent, canActivate: [CatAuthGuard]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAdoptionRoutingModule {}
