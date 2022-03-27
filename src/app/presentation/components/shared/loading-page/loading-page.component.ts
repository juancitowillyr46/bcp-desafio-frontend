import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  public isLoad = true;

  constructor() { }

  ngOnInit(): void {
    const that = this;
    setTimeout(() => {
      that.isLoad = false;
    }, 5000);
  
  }

  
}
