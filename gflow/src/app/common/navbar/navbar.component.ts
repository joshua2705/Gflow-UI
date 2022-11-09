import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input()
  loggedin: boolean = false;
  
  @Input()
  processing: boolean = false;

  ngOnInit(): void {
    console.log(this.loggedin,this.processing)
  }

}
