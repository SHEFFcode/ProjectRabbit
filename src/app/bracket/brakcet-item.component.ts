import {Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Bracket} from "../legues/bracket";
import {LeguedataService} from "../legues/leguedata.service";

@Component({
  moduleId: module.id,
  selector: 'app-brakcet-item',
  templateUrl: 'brakcet-item.component.html',
  styleUrls: ['brakcet-item.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BrakcetItemComponent implements OnInit {
  bracket: Bracket;

  constructor(private legueService: LeguedataService) { }

  ngOnInit() {
    this.bracket = this.legueService.getBracket();
  }

}
