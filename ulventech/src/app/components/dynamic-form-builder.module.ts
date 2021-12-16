import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormBuilderComponent} from './dynamic-form-builder.component';
import {IonicModule} from '@ionic/angular';
import {SkeletonComponent} from './skeleton/skeleton.component';

const COMPONENTS = [
  DynamicFormBuilderComponent,
  SkeletonComponent,
];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [COMPONENTS],
  providers: [],
})
export class DynamicFormBuilderModule {
}
