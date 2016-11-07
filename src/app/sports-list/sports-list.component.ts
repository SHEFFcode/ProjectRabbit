import { Component, OnInit } from '@angular/core';
import {MatchupItemComponent} from "../matchup-item/matchup-item.component";
import {SportItemComponent} from "../sport-item/sport-item.component";

@Component({
  moduleId: module.id,
  selector: 'app-sports-list',
  templateUrl: 'sports-list.component.html',
  styleUrls: ['sports-list.component.css'],
  directives: [SportItemComponent]
})
export class SportsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sports: string[] = ['volleyball', 'soccer', 'tennis', 'flag football'];

}
