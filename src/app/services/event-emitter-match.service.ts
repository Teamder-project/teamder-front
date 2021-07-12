import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gamer } from '../models/Gamer';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterMatchService {

  invokeHeaderFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onNotificationMatch(gamer: Gamer) {
    this.invokeHeaderFunction.emit(gamer);
  }
}
