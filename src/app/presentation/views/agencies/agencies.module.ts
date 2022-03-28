import { NgModule } from '@angular/core';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgenciesDetailComponent } from './agencies-detail/agencies-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { AgenciesComponent } from './agencies.component';
import { MaterialModule } from 'src/app/configurations/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AgenciesDetailObservable } from './agencies-detail/agencies-detail.observable';

const routes: Routes = [
  {
    path: '', component: AgenciesComponent,
    children: [
      {path:'', component: AgenciesListComponent },
      {path: ':idAgency', component: AgenciesDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AgenciesListComponent,
    AgenciesDetailComponent,
    AgenciesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MaterialModule,
  ],
  exports: [
    AgenciesListComponent,
    AgenciesDetailComponent,
  ],
  providers: [AgenciesDetailObservable]
})
export class AgenciesModule { }
