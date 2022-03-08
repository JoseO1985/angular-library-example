import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { /*BarComponent, ChipAutocompleteComponent, PieComponent, */ComponentsLibraryModule } from 'celonis-library';

@NgModule({
  imports: [
    ComponentsLibraryModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ComponentsLibraryModule,
    /*PieComponent,
    BarComponent,
    ChipAutocompleteComponent*/
  ],
  declarations: [
  ],
})
export class SharedModule { }
