import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-sports-brackets',
  templateUrl: 'sports-brackets.component.html',
  styleUrls: ['sports-brackets.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SportsBracketsComponent implements OnInit {

  constructor() { }

  matchups: Object[] = [
    {
      firstParticipant: 'Jeremy',
      secondParticipant: 'Josh'
    },
    {
      firstParticipant: 'Mike',
      secondParticipant: 'Olga'
    }
  ];

  ngOnInit() {
  }

}
