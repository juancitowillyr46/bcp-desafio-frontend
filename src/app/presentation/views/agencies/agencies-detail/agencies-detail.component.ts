import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-agencies-detail',
  templateUrl: './agencies-detail.component.html',
  styleUrls: ['./agencies-detail.component.scss']
})
export class AgenciesDetailComponent implements OnInit {

  public isTypeAction: boolean = true;

  public idAgency: number = 0;

  public agencyFormGroup: FormGroup = this.fb.group({
    agencyName: ['', Validators.required],
    agencyAddress: ['', Validators.required],
    agencyDistrict: ['', Validators.required],
    agencyLatitude: ['', Validators.required],
    agencyLongitude: ['', Validators.required]
  });

  constructor(
    public router: Router,
    public routeActivated: ActivatedRoute,
    private fb: FormBuilder
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
    this.router.navigate(['agencies']);
  }

  getAgencyDetailById(idAgency: number){
    const that = this;
    this.agencyFormGroup.setValue({
      agencyName: "1", 
      agencyAddress: "2", 
      agencyDistrict: "3", 
      agencyLatitude: "4", 
      agencyLongitude: "5"
    });
  }

  postUpdateAgency() {
    const that = this;
    console.log(this.agencyFormGroup.valid);
  }

  postCreatAgency() {
    const that = this;
    console.log(this.agencyFormGroup.valid);
  }

  get f() { return this.agencyFormGroup.controls; }

}
