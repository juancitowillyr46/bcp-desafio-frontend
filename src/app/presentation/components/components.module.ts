import { NgModule } from '@angular/core';
import { LoadingPageComponent } from './shared/loading-page/loading-page.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AgencyMapComponent } from './agency-map/agency-map.component';
import { MaterialModule } from 'src/app/configurations/material.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoadingPageComponent,
    AgencyListComponent,
    AgencyDetailComponent,
    HeaderComponent,
    FooterComponent,
    AgencyMapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoadingPageComponent,
    HeaderComponent,
    FooterComponent,
    AgencyMapComponent
  ]
})
export class ComponentsModule { }
