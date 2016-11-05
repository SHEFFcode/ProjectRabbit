import {provideRouter} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";
export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    {path: '', redirectTo: '/brackets', pathMatch: 'full'},
    {path: 'brackets', component: SidebarComponent, /*children: RECIPE_ROUTES*/},
    // {path: 'shopping-list', component: ShoppingListComponent}
  ])
];
