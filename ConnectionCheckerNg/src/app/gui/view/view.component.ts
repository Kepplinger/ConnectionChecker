import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {

  private overviewActive:boolean;
  private detailsActive:boolean = true;


  constructor() { }

  ngOnInit() {
  }

  isOverviewActive():boolean{
    return this.overviewActive;
  }
  isDetailsViewActive():boolean{
    return this.detailsActive;
  }

  setOverviewActive(active:boolean){
    this.overviewActive = active;
    this.detailsActive = !active;
  }
  setDetailsActive(active:boolean){
    this.detailsActive = active;
    this.overviewActive = !active;
  }
}
