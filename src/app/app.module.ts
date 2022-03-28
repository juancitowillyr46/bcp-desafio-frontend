import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './configurations/material.module';
import { PresentationModule } from './presentation/presentation.module';
import { ComponentsModule } from './presentation/components/components.module';
import { AgenciesServices } from './core/domain/agencies/services/agencies.service';
import { AgenciesRepository } from './core/domain/agencies/repositories/agencies.repository';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PresentationModule,
    ComponentsModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
