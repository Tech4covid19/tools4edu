import { Injectable } from '@angular/core';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getAppConfig() { return AppConfig; }
}
