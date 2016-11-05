import {Component, OnInit, Input, Output} from '@angular/core';
import {Bracket} from "../legues/bracket";
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-matchup-item',
  templateUrl: 'matchup-item.component.html',
  styleUrls: ['matchup-item.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MatchupItemComponent implements OnInit {

  @Input() matchup: Bracket;
  @Input() matchupId: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
