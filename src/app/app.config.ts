import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import  {authIntersiptor} from './intersiptor/auth.intersiptor.service'

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch(),withInterceptors([ authIntersiptor]))]
};
