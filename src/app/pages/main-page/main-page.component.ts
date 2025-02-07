import { Component } from '@angular/core';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiIconBadge} from '@taiga-ui/kit';
import {NamesFormComponent} from "../../components/names-form/names-form.component";

@Component({
  selector: 'app-main-page',
    imports: [
        TuiCardLarge,
        TuiAppearance,
        TuiHeader,
        TuiTitle,
        ReactiveFormsModule,
        TuiInputModule,
        TuiButton,
        TuiIcon,
        TuiIconBadge,
        NamesFormComponent
    ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
