import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {provideRouter, withHashLocation} from "@angular/router";
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {routes} from "./app/app.routes";
import {spinnerInterceptor} from "./app/spinner.interceptor";
import {authInterceptor} from "./app/auth.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(
      withFetch(),
      withInterceptors([spinnerInterceptor, authInterceptor])
    )
  ],
})
  .catch((err) => console.error(err));

