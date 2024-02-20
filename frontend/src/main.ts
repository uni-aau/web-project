import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {provideRouter, withHashLocation} from "@angular/router";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi
} from "@angular/common/http";
import {routes} from "./app/app.routes";
import {spinnerInterceptor} from "./app/spinner.interceptor";
import {authInterceptor} from "./app/auth.interceptor";
import {ErrorInterceptor} from "./app/errorInterceptor";



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),

    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch(),
      withInterceptors([spinnerInterceptor, authInterceptor]),

    ),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
  .catch((err) => console.error(err));

