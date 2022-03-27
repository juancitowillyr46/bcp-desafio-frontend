import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isActiveSearch:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSearch() {
    const that = this;
    that.isActiveSearch = true;
    if(that.isActiveSearch) {
      that.isActiveSearch = false;
    }
  }

}
