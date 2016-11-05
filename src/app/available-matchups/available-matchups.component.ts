import { Component, OnInit } from '@angular/core';
import {MatchupItemComponent} from "../matchup-item/matchup-item.component";

@Component({
  moduleId: module.id,
  selector: 'app-available-matchups',
  templateUrl: 'available-matchups.component.html',
  styleUrls: ['available-matchups.component.css'],
  directives: [MatchupItemComponent]
})
export class AvailableMatchupsComponent implements OnInit {
  private matchups: string[] = ["Josh v Jeremy", "Mike v Steve"];
  constructor() { }

  ngOnInit() {
    var matchups = this.matchups;
  }

}
