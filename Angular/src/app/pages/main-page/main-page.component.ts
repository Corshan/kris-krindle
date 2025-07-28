import { Component } from '@angular/core';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiIconBadge} from '@taiga-ui/kit';
import {NamesFormComponent} from "../../components/names-form/names-form.component";
import {GifteesCardComponent} from '../../components/giftees-card/giftees-card.component';

@Component({
  selector: 'app-main-page',
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    NamesFormComponent,
    GifteesCardComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  protected names: string[] = [];

  onNamesChanged(names: string[]) {
    this.names = names;
  }
}
