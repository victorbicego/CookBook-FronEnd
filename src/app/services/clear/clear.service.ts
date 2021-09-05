import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ClearService {

  private clear = new Subject<boolean>();

  constructor() {
  }

  public getClear(): Subject<boolean> {
    return this.clear;
  }

}
