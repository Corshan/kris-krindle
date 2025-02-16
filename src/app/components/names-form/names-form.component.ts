import {Component, output, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiAppearance, TuiButton, TuiError, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFieldErrorPipe, TuiIconBadge, tuiValidationErrorsProvider} from '@taiga-ui/kit';
import {AsyncPipe, NgForOf} from '@angular/common';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
  selector: 'app-names-form',
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiButton,
    TuiIcon,
    TuiIconBadge,
    NgForOf,
    TuiError,
    TuiFieldErrorPipe,
    AsyncPipe,
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
  ],
  templateUrl: './names-form.component.html',
  styleUrl: './names-form.component.css',
  providers: [
    tuiValidationErrorsProvider({
      required: 'Opps, you forgot a name!!',
    }),
  ],
})
export class NamesFormComponent {
  protected readonly namesForm: FormGroup;
  names = output<string[]>();

  constructor() {
    this.namesForm = new FormGroup({
      names: new FormArray(
        [new FormControl('', [Validators.required])],
      ),
    });
  }

  getNames(): FormArray {
    return this.namesForm.get('names') as FormArray;
  }

  addNameInput() {
    this.getNames().push(new FormControl('', [Validators.required]));
  }

  removeNameInput() {
    if (this.getNames().length == 1) {
      this.getNames().removeAt(-1);
      this.addNameInput();
    } else this.getNames().removeAt(-1);
  }

  onSubmit() {
    this.names.emit(
      this.getNames().getRawValue() as string[]
    );
    // console.log(this.getNames().getRawValue());
  }
}
