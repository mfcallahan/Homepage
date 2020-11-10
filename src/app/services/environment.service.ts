import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEnvironment } from '../interfaces/iEnvironment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements IEnvironment {
  get production() {
    return environment.production;
  }

  get baseConfigs() {
    return environment.baseConfigs;
  }
}
