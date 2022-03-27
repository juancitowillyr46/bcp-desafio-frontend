import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {

  public route: Router;

  constructor(
    public router: Router
  ) { 

    this.route = router;

  }

  ngOnInit(): void {
  }

  goDetailAgency(idAgency: number) {
    this.router.navigate(['agencies/' + idAgency]);
  }

  goAddAgency() {
    this.router.navigate(['agencies/' + 0]);
  }

}
