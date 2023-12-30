import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {provideRouter, withHashLocation} from "@angular/router";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {routes} from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withFetch()),     // Neccessary for http client
  ],
})
  .catch((err) => console.error(err));

