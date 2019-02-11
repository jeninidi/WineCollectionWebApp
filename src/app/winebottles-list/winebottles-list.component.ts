import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winebottles-list',
  templateUrl: './winebottles-list.component.html',
  styleUrls: ['./winebottles-list.component.css']
})
export class WinebottlesListComponent implements OnInit {
  panelOpenState = false;
  public show:boolean = false;
  public buttonName:any = 'Show';
  winelist: Wines[];

  constructor() { 
    this.winelist = [
      {Id: '1', name: 'Wine1'},
      {Id: '2', name: 'Wine2'},
      {Id: '3', name: 'Wine3'},
    ];
  }

  ngOnInit() {
  }
  
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
export class Wines{
  Id: string;
  name: string;
}