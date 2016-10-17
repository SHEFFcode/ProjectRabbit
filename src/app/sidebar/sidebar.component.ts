import { Component, OnInit } from '@angular/core';
import {Bracket} from "../legues/bracket";
import {BrakcetItemComponent} from "../bracket/brakcet-item.component";
import {Legue} from "../legues/legue";
import {SportList} from "../legues/sport-list";
import {LeguedataService} from "../legues/leguedata.service";

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [BrakcetItemComponent]
})
export class SidebarComponent implements OnInit {
  private legues: Legue[];
  private sports: SportList[];
  constructor(private legueService: LeguedataService) { }
  public selectedSport;
  public selectedLegue;

  ngOnInit() {
    this.legues = this.legueService.getLegues();
    this.sports = this.legueService.getSports();
    this.legueService.storeBracket().subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.selectedLegue = this.legues[0];
    this.selectedSport = this.sports[0];
  }

}
