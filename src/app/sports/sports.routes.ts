import {RouterConfig} from "@angular/router";
import {SportsListComponent} from "../sports-list/sports-list.component";
import {BrakcetItemComponent} from "../bracket/brakcet-item.component";

export const SPORTS_ROUTES: RouterConfig = [
  {path: '', component: SportsListComponent},
  {path: ':id', component: BrakcetItemComponent}
];
