import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _timeCountdown: boolean = true;
  private _timeCountdownLimit: number = 6000;
  private _delay: boolean = true;
  private _delayTime: number = 1000;
  private _questionsAmount: number = 10;

  set timeCountdown(value) {
    this._timeCountdown = value;
  }

  get timeCountdown(): boolean {
    return this._timeCountdown;
  }

  set timeCountdownLimit(value) {
    this._timeCountdownLimit = value;
  }

  get timeCountdownLimit(): number {
    return this._timeCountdownLimit;
  }

  set delay(value) {
    this._delay = value;
  }

  get delay(): boolean {
    return this._delay;
  }

  set delayTime(value) {
    this._delayTime = value;
  }

  get delayTime(): number {
    return this._delayTime;
  }

  set questionsAmount(value) {
    this._questionsAmount = value;
  }

  get questionsAmount(): number {
    return this._questionsAmount;
  }
}
