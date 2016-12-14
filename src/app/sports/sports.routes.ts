import {RouterConfig} from "@angular/router";
import {SportsListComponent} from "../sports-list/sports-list.component";
import {BrakcetItemComponent} from "../bracket/brakcet-item.component";
import {SportsBracketsComponent} from "../sports-brackets/sports-brackets.component";

export const SPORTS_ROUTES: RouterConfig = [
  {path: '', component: SportsListComponent},
  {path: ':id', component: BrakcetItemComponent},
  {path: 'matchups/:name', component: SportsBracketsComponent}
];
