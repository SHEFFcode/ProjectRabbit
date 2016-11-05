import { Component, OnInit } from '@angular/core';
import {MatchupItemComponent} from "../matchup-item/matchup-item.component";
import {Bracket} from "../legues/bracket";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-available-matchups',
  templateUrl: 'available-matchups.component.html',
  styleUrls: ['available-matchups.component.css'],
  directives: [MatchupItemComponent, ROUTER_DIRECTIVES]
})
export class AvailableMatchupsComponent implements OnInit {
  private matchups: Bracket[] = [new Bracket("Josh", "Jeremy"), new Bracket("Mike", "Olga")];
  constructor() { }

  ngOnInit() {
    var matchups = this.matchups;
  }

}
