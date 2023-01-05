import { AdoptionService } from './../../shared/services/adoption/adoption.service';
import { Component } from '@angular/core';
import { CatCRUDComponentBase } from '@catrx/ui/common';
import { CatDatatableService } from '@catrx/ui/datatable';
import { CatFormService, CatFormListOptions } from '@catrx/ui/form';
import { CatDialogService } from '@catrx/ui/dialog';
import { CatLoaderPageService } from '@catrx/ui/loader-page';
import { CatSnackbarService } from '@catrx/ui/snackbar';
import { CatConfirmService } from '@catrx/ui/confirm';
import { CatXlsxService } from '@catrx/ui/utils';
import { PetSexOptions, Pet } from '../../shared/services/adoption/adoption.interface';
import { koala } from '@koalarx/utils';

@Component({
  templateUrl: './page-adoption.component.html',
  styles: [
    `
      cat-form {
        display: block;
        margin: 20px 20px 10px;
      }
    `,
  ],
})
export class PageAdoptionComponent extends CatCRUDComponentBase {
  filterForm = this.formService
    .build()
    .search('Raça', 'race', (builder) => builder.grid(3).generate())
    .select('Sexo', 'sex', (builder) =>
      builder
        .setOptions(
          koala([{ value: '', name: 'Todos' }])
            .array<CatFormListOptions>()
            .merge(PetSexOptions)
            .getValue()
        )
        .grid(3)
        .generate()
    )
    .onChange((filter) => this.filterValueChanges$.next(filter))
    .generate();

  listConfig = this.datatableService
    .build(this.filterValueChanges$, (filter) =>
      this.service.getDatatable(filter)
    )
    .setColumns(['Raça', 'Sexo', 'Peso', 'Idade'])
    .setActionButton({
      iconName: 'fa-solid fa-pen',
      tooltip: 'Editar',
      fnAction: (item) => this.openDialog(item),
    })
    .setItemLine({
      columnIndex: 0,
      text: (item) => item.race,
    })
    .setItemLine({
      columnIndex: 1,
      text: (item) => (item.sex === 'M' ? 'Macho' : 'Fêmea'),
    })
    .setItemLine({
      columnIndex: 2,
      text: (item) => item.weight,
    })
    .setItemLine({
      columnIndex: 3,
      text: (item) => item.yearsOld ?? '-',
    })
    .hasSelection()
    .hasActions()
    .getSelection((selection) => (this.selection = selection))
    .getDatasource((datasource) => (this.datasource = datasource))
    .generate();

  constructor(
    formService: CatFormService,
    datatableService: CatDatatableService,
    loaderService: CatLoaderPageService,
    snackbarService: CatSnackbarService,
    dialogService: CatDialogService,
    confirmService: CatConfirmService,
    xlsxService: CatXlsxService,
    protected override service: AdoptionService
  ) {
    super(
      formService,
      datatableService,
      service,
      loaderService,
      snackbarService,
      dialogService,
      confirmService,
      { xlsx: xlsxService }
    );
  }

  openDialog(data?: Pet) {
    this.openFormDialog(
      this.formService
        .build(data)
        .text('Raça', 'race', (builder) =>
          builder.grid(6).focus().setRequired().generate()
        )
        .select('Sexo', 'sex', (builder) =>
          builder.grid(6).setOptions(PetSexOptions).setRequired().generate()
        )
        .text('Peso', 'weight', (builder) =>
          builder.grid(6).setRequired().generate()
        )
        .text('Idade', 'yearsOld', (builder) => builder.grid(6).generate())
        .listsItem('Vacinas', 'vacines', (builder) =>
          builder
            .text('Nome', 'name', (builder) =>
              builder.grid(6).setRequired().generate()
            )
            .date('Data da Aplicação', 'dateApplied', (builder) =>
              builder.grid(6).setRequired().generate()
            )
            .generate()
        )
        .onSubmit((pet) => this.service.save(pet, data?.id))
        .generate(),
      !!data,
      { title: 'Pet', size: 'small' }
    );
  }

  export(filename: string): void {
    this.exportByService(
      {
        xlsx: { filename, sheetName: 'Pets para Adoção' },
      },
      this.service.exportPets(this.filterValueChanges$.getValue())
    );
  }
}
