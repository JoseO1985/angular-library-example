import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChipAutocompleteComponent } from './chip-autocomplete/chip-autocomplete.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { SharedModule } from '../shared/shared.module';

const components = [
  ChipAutocompleteComponent,
  PieComponent,
  BarComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ...components
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentsLibraryModule { }
