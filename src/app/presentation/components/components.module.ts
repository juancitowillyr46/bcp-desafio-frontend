import { NgModule } from '@angular/core';
import { LoadingPageComponent } from './shared/loading-page/loading-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AgencyMapComponent } from './agency-map/agency-map.component';
import { MaterialModule } from 'src/app/configurations/material.module';
import { CommonModule } from '@angular/common';
import { AgencyItemComponent } from './agency-item/agency-item.component';

@NgModule({
  declarations: [
    LoadingPageComponent,
    HeaderComponent,
    FooterComponent,
    AgencyMapComponent,
    AgencyItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoadingPageComponent,
    HeaderComponent,
    FooterComponent,
    AgencyMapComponent,
    AgencyItemComponent
  ]
})
export class ComponentsModule { }
