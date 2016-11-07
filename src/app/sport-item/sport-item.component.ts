import {Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-sport-item',
  templateUrl: 'sport-item.component.html',
  styleUrls: ['sport-item.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SportItemComponent implements OnInit {
  @Input() sport: string;
  @Input() sportId: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
