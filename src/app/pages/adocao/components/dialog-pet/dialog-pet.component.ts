import { Component, Inject } from '@angular/core';
import { CatDialogRef, CAT_DIALOG_DATA } from '@catrx/ui/dialog';
import { CatFormService } from '@catrx/ui/form';
import { Subject } from 'rxjs';
import { PetService, Pet } from '../../../../shared/services/pet/pet.service';

@Component({
  templateUrl: './dialog-pet.component.html',
})
export class DialogPetComponent {
  submit$ = new Subject();
  petForm = this.formService
    .build<{ pet: Pet }>()
    .fieldset('Dados do Animal', 'pet', (builder) =>
      builder
        .select('Tipo', 'type', (builder) =>
          builder
            .grid(6)
            .setOptions([
              { value: 'gatos', name: 'Felino' },
              { value: 'cachorros', name: 'Canino' },
            ])
            .setRequired()
            .generate()
        )
        .text('Raça', 'race', (builder) =>
          builder.grid(6).setRequired().generate()
        )
        .url('Foto', 'photo', (builder) => builder.setRequired().generate())
        .generate()
    )
    .onSubmit((data) => {
      this.petService
        .save(data.pet, this.pet?.id)
        .subscribe(() => this.dialogRef.close('reloadList'));
    })
    .generate();

  constructor(
    private formService: CatFormService,
    private petService: PetService,
    public dialogRef: CatDialogRef<DialogPetComponent>,
    @Inject(CAT_DIALOG_DATA) public pet?: Pet
  ) {}
}
