import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiButton, TuiError, TuiIcon} from '@taiga-ui/core';
import {TuiFieldErrorPipe, TuiIconBadge, tuiValidationErrorsProvider} from '@taiga-ui/kit';
import {AsyncPipe, NgForOf} from '@angular/common';

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
}
