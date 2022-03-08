import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const coreModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  MaterialModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    ...coreModules
  ],
  exports: [
    ...coreModules
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
