import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AgencyEntity } from 'src/app/core/domain/agencies/entities/agency.entities';
import { AgencyModel } from 'src/app/core/domain/agencies/models/agency.model';
import { AgenciesServices } from 'src/app/core/domain/agencies/services/agencies.service';
import { AgenciesDetailObservable } from '../agencies-detail/agencies-detail.observable';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {

  public agencies: AgencyModel[] = [];

  constructor(
    public router: Router,
    private agenciesService: AgenciesServices
  ) { 
    
  }

  ngOnInit(): void {
    const that = this;

    if(localStorage.getItem("agencies") == undefined) {
      that.agenciesService.getAllAgencies().subscribe( res => {
        localStorage.setItem("agencies", JSON.stringify(res));
        that.agencies = res;
      });
    } else {
      let dataTmp: any = localStorage.getItem("agencies");
      that.agencies = JSON.parse(dataTmp);
    }
   
  }

  goAddAgency() {
    const that = this;
    that.router.navigate(['agencies/' + 0]);
  }

  goDetailAgency(idAgency: number) {
    const that = this;
    that.router.navigate(['agencies/' + idAgency]);
  }

}
