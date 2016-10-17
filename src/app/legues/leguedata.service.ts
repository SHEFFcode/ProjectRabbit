import {Injectable, EventEmitter} from '@angular/core';
import {Bracket} from "./bracket";

@Injectable()
export class LeguedataService {
  legueDataRetrieved = new EventEmitter<Bracket>();
  constructor() { }

}
