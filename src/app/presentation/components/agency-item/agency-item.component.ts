import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyModel } from 'src/app/core/domain/agencies/models/agency.model';
import { AgenciesServices } from 'src/app/core/domain/agencies/services/agencies.service';
import { environment } from 'src/environments/environment';
import { AgenciesDetailObservable } from '../../views/agencies/agencies-detail/agencies-detail.observable';

@Component({
  selector: 'app-agency-item',
  templateUrl: './agency-item.component.html',
  styleUrls: ['./agency-item.component.scss']
})
export class AgencyItemComponent implements OnInit {

  
  @Input() public agency: AgencyModel = {
      id: 0,
      agencia: "",
      distrito: "",
      provincia: "",
      departamento: "",
      direccion: "",
      lat: 0,
      lon: 0,
      image: "2"
  };

  public urlImage:string = environment.AGENCY_URL_IMAGE;
  public agencies: AgencyModel[] = [];

  constructor(
    public router: Router,
    private agenciesService: AgenciesServices,
    private agenciesDetailObservable: AgenciesDetailObservable
  ) { }

  ngOnInit(): void {
    const that = this;
    that.agenciesService.getAllAgencies().subscribe( res => {
      that.agencies = res;
    });
  }

  
  goDetailAgency(idAgency: number) {
    const that = this;
    let agency = that.agencies.find(f => f.id == idAgency);
    //that.agenciesDetailObservable.changeMessage(agency);
    this.router.navigate(['agencies/' + idAgency]);
  }

}
