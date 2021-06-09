import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Microfrontend, ROUTES } from './routes.config';

@Injectable({
  providedIn: 'root'
})
export class RouteLookupService {

  constructor() { }

  lookup(): Promise<Microfrontend[]> {
    return Promise.resolve(ROUTES);
  }
}
