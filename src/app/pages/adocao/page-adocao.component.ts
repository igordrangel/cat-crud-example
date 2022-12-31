import { Component } from '@angular/core';
import { CatComponentBase } from '@catrx/ui/core';
import { CatDialogService } from '@catrx/ui/dialog';
import { CatDatatableService } from '@catrx/ui/datatable';
import { DialogPetComponent } from './components/dialog-pet/dialog-pet.component';
import { Pet, PetService } from '../../shared/services/pet/pet.service';
import { CatDynamicComponent } from '@catrx/ui/dynamic-component';
import { PetPhotoComponent } from './components/pet-photo/pet-photo.component';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './page-adocao.component.html',
})
export class PageAdocaoComponent extends CatComponentBase {
  reloadList$ = new Subject<boolean>();
  tableConfig = this.datatableService
    .build<Pet>()
    .setColumns(['Foto', 'Tipo', 'Raça'])
    .setItemLine({
      columnIndex: 0,
      component: (itemLine) => {
        console.log(itemLine)
        return new CatDynamicComponent(PetPhotoComponent, itemLine.photo);
      },
    })
    .setItemLine({
      columnIndex: 1,
      sortColumn: 'type',
      text: (itemLine) => (itemLine.type === 'gatos' ? 'Felino' : 'Canino'),
    })
    .setItemLine({
      columnIndex: 2,
      sortColumn: 'race',
      text: (itemLine) => itemLine.race,
    })
    .setActionButton({
      iconName: 'fa-solid fa-pen',
      tooltip: 'Editar',
      havePermission: true,
      fnAction: (pet) => this.openDialog(pet),
    })
    .setService((filter) => this.petService.getAll())
    .hasActions()
    .hasSelection()
    .generate();

  constructor(
    private dialogService: CatDialogService,
    private datatableService: CatDatatableService,
    private petService: PetService
  ) {
    super();
  }

  public openDialog(pet?: Pet) {
    this.dialogService.open(DialogPetComponent, {
      size: 'small',
      data: pet,
      closeTrigger: 'reloadList',
      callbackCloseTrigger: () => this.reloadList$.next(true),
    });
  }
}
