import { NgModule } from '@angular/core';
import { AgenciesModule } from './agencies/agencies.module';

@NgModule({
  declarations: [
  ],
  imports: [
    AgenciesModule
  ],
  exports: [
    AgenciesModule
  ]
})
export class ViewsModule { }
