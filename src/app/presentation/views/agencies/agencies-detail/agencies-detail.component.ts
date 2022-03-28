import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyModel } from 'src/app/core/domain/agencies/models/agency.model';
import { AgenciesServices } from 'src/app/core/domain/agencies/services/agencies.service';
import { AgenciesDetailObservable } from './agencies-detail.observable';

@Component({
  selector: 'app-agencies-detail',
  templateUrl: './agencies-detail.component.html',
  styleUrls: ['./agencies-detail.component.scss']
})
export class AgenciesDetailComponent implements OnInit {

  public isTypeAction: boolean = true;

  public idAgency: number = 0;

  public agencies: AgencyModel[] = [];

  public agencyFormGroup: FormGroup = this.fb.group({
    agencyName: ['', Validators.required],
    agencyAddress: ['', Validators.required],
    agencyDistrict: ['', Validators.required],
    agencyLatitude: ['', Validators.required],
    agencyLongitude: ['', Validators.required]
  });

  public agencyDetail: AgencyModel = {
    id: 0,
    agencia: "",
    distrito: "",
    provincia: "",
    departamento: "",
    direccion: "",
    lat: 0,
    lon: 0,
    image: ""
  };

  constructor(
    public router: Router,
    public routeActivated: ActivatedRoute,
    private fb: FormBuilder,
    private agenciesService: AgenciesServices,
    private agenciesDetailObservable: AgenciesDetailObservable
  ) { 
    const that = this;
    that.idAgency = Number(this.routeActivated.snapshot.paramMap.get('idAgency'));
    that.isTypeAction = (this.idAgency == 0);

  }

  ngOnInit(): void {
    const that = this;
    that.getAgencyDetailById(this.idAgency);
  }

  goReturnAgencyList() {
    const that = this;
    that.router.navigate(['agencies']);
  }

  getAgencyDetailById(idAgency: number){
    const that = this;

    if(localStorage.getItem("agencies") == undefined) {
      that.agenciesService.getAllAgencies().subscribe( res => {
        let agency = res.find(f => f.id == idAgency);
        if(agency != undefined) {
          that.agencyFormGroup.setValue({
            agencyName: agency.agencia, 
            agencyAddress: agency.direccion, 
            agencyDistrict: agency.distrito, 
            agencyLatitude: agency.lat, 
            agencyLongitude: agency.lon
          });
        }
      });
    } else {
      let dataTmp: any = localStorage.getItem("agencies");
      that.agencies = JSON.parse(dataTmp);
      let agency: any = that.agencies.find(f => f.id == idAgency);
      that.agencyFormGroup.setValue({
        agencyName: agency.agencia, 
        agencyAddress: agency.direccion, 
        agencyDistrict: agency.distrito, 
        agencyLatitude: agency.lat, 
        agencyLongitude: agency.lon
      });
    }
    
    
  }

  postUpdateAgency() {
    const that = this;
    that.agenciesService.updateAgencies(that.idAgency, that.agencyFormGroup.value);
    that.router.navigate(['agencies']);
  }

  postCreatAgency() {
    const that = this;
    that.agenciesService.postAgencies(that.agencyFormGroup.value);
    that.router.navigate(['agencies']);
  }

  get f() { return this.agencyFormGroup.controls; }

}
