import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public mobileView: boolean = false;
  public innerWidth: any;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize() {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth <= 700){
    this.mobileView = true;
  }
  else{
    this.mobileView = false;
  }
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

}
