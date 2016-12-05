import { Component, OnInit } from '@angular/core';
import {SportsListComponent} from "../sports-list/sports-list.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-sports',
  templateUrl: 'sports.component.html',
  styleUrls: ['sports.component.css'],
  directives: [SportsListComponent, ROUTER_DIRECTIVES]
})
export class SportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
