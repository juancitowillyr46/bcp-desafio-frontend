import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AgencyModel } from 'src/app/core/domain/agencies/models/agency.model';

@Injectable()

export class AgenciesDetailObservable {

 private definedModel: any = null;

 private data: any = new BehaviorSubject(this.definedModel || null);
 public currentData = this.data.asObservable();

 changeMessage(value?: AgencyModel | null) {
  this.data.next(value);
 }

}