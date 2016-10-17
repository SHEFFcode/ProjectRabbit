import { Component, OnInit } from '@angular/core';
import {Bracket} from "../legues/bracket";
import {BrakcetItemComponent} from "../bracket/brakcet-item.component";

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [BrakcetItemComponent]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
