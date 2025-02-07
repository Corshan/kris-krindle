import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiIconBadge} from '@taiga-ui/kit';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-names-form',
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiButton,
    TuiIcon,
    TuiIconBadge,
    NgForOf,
  ],
  templateUrl: './names-form.component.html',
  styleUrl: './names-form.component.css'
})
export class NamesFormComponent {
  protected readonly namesForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.namesForm = this.formBuilder.group({
      nameId: this.formBuilder.array([this.newName()])
    });
  }

  newName(): FormGroup {
    return this.formBuilder.group({
      name: '',
    })
  }

  getNames(): FormArray {
  return this.namesForm.get('nameId') as FormArray;
  }

  addNameInput(){
    this.getNames().push(this.newName());
  }

  removeNameInput(){
    if(this.getNames().length != 1) this.getNames().removeAt(-1);
  }
}
