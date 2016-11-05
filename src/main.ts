import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {HTTP_PROVIDERS} from "@angular/http";
import {LeguedataService} from "./app/legues/leguedata.service";
import {APP_ROUTES_PROVIDERS} from "./app/app.routes";
import {provideForms, disableDeprecatedForms} from "@angular/forms";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  LeguedataService,
  APP_ROUTES_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
]);
