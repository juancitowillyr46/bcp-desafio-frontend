import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsModule } from './views/views.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //ComponentsModule,
    ViewsModule
  ],
  exports: [
    //ComponentsModule,
    ViewsModule
  ]
})
export class PresentationModule { }
