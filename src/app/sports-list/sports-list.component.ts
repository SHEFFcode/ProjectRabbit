import { Component, OnInit } from '@angular/core';
import {SportItemComponent} from "../sport-item/sport-item.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-sports-list',
  templateUrl: 'sports-list.component.html',
  styleUrls: ['sports-list.component.css'],
  directives: [SportItemComponent, ROUTER_DIRECTIVES]
})
export class SportsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sports: string[] = ['volleyball', 'soccer', 'tennis', 'flag football'];

}
