import {provideRouter} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RECIPE_ROUTES} from "./sidebar/sidebar.routes";
import {AddBracketComponent} from "./add-bracket/add-bracket.component";
export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    {path: '', redirectTo: '/brackets', pathMatch: 'full'},
    {path: 'brackets', component: SidebarComponent, children: RECIPE_ROUTES},
    {path: 'addbracket', component: AddBracketComponent},
    // {path: 'shopping-list', component: ShoppingListComponent}
  ])
];
