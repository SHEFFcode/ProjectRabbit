import {provideRouter} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RECIPE_ROUTES} from "./sidebar/sidebar.routes";
import {AddBracketComponent} from "./add-bracket/add-bracket.component";
import {LoginComponent} from "./login/login.component";
import {SPORTS_ROUTES} from "./sports/sports.routes";
import {SportsComponent} from "./sports/sports.component";

export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'brackets', component: SidebarComponent, children: RECIPE_ROUTES},
    {path: 'login', component: LoginComponent},
    {path: 'sports', component: SportsComponent, children: SPORTS_ROUTES},
    {path: 'addbracket', component: AddBracketComponent},
  ])
];
