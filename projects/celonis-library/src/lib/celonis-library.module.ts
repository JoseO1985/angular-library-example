import { NgModule } from '@angular/core';
import { CoreModule } from '@angular/flex-layout';
import { ComponentsLibraryModule } from './components/components.module';

const allModules = [
  ComponentsLibraryModule
]


@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule,
    ...allModules
  ],
  exports: [
    ...allModules
  ]
})
export class CelonisLibraryModule { }
