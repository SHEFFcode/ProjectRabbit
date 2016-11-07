import {provideRouter} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RECIPE_ROUTES} from "./sidebar/sidebar.routes";
import {AddBracketComponent} from "./add-bracket/add-bracket.component";
import {LoginComponent} from "./login/login.component";
import {SportsListComponent} from "./sports-list/sports-list.component";
export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    {path: '', redirectTo: '/sports', pathMatch: 'full'},
    {path: 'brackets', component: SidebarComponent, children: RECIPE_ROUTES},
    {path: 'login', component: LoginComponent},
    {path: 'sports', component: SportsListComponent},
    {path: 'addbracket', component: AddBracketComponent},
    // {path: 'shopping-list', component: ShoppingListComponent}
  ])
];
