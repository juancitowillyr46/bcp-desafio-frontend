import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesServices } from './domain/agencies/services/agencies.service';
import { AgenciesRepository } from './domain/agencies/repositories/agencies.repository';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: AgenciesServices, useClass: AgenciesServices},
    {provide: AgenciesRepository, useClass: AgenciesRepository}
  ],
})
export class CoreModule { }
