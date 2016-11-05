import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from "@angular/router";
import {Bracket} from "../legues/bracket";
import {LeguedataService} from "../legues/leguedata.service";

@Component({
  moduleId: module.id,
  selector: 'app-brakcet-item',
  templateUrl: 'brakcet-item.component.html',
  styleUrls: ['brakcet-item.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BrakcetItemComponent implements OnInit, OnDestroy {
  bracket: Bracket;
  matchup: Bracket;
  private sub: any;

  constructor(private legueService: LeguedataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      let matchups: Bracket[] = [new Bracket("Josh", "jeremy"), new Bracket("Mike", "Olga")];
      this.matchup = matchups[params['id']];
    });
    // this.bracket = this.legueService.getBracket();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
