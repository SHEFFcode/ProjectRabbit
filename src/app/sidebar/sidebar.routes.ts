import {RouterConfig} from "@angular/router";
import {BrakcetItemComponent} from "../bracket/brakcet-item.component";
import {AvailableMatchupsComponent} from "../available-matchups/available-matchups.component";

export const RECIPE_ROUTES: RouterConfig = [
  {path: '', component: AvailableMatchupsComponent},
  {path: ':id', component: BrakcetItemComponent},
];
