import {Injectable, EventEmitter} from '@angular/core';
import {Bracket} from "./bracket";
import {Legue} from "./legue";
import {SportList} from "./sport-list";
import {Http, Headers, Response} from "@angular/http";

@Injectable()
export class LeguedataService {
  constructor(private http: Http) { }
  legueDataRetrieved = new EventEmitter<Legue[]>();
  sportDataRetrieved = new EventEmitter<SportList[]>();
  bracketDataRetrieved = new EventEmitter<Bracket>();

  private sports: SportList[] = [new SportList('volleyball'), new SportList('softball'), new SportList('tennis'), new SportList('soccer'), new SportList('kickball')];
  private legues: Legue[] = [new Legue('first-legue'), new Legue('second-legue'), new Legue('third-legue')];
  private bracket: Bracket = new Bracket('teamOne', 'teamTwo');

  getSports() {
    return this.sports;
  }

  getLegues() {
    return this.legues;
  }

  getBracket() {
    return this.bracket;
  }

  storeBracket(passedInBracket: Bracket) {
    // const body = JSON.stringify(this.bracket);
    const body = JSON.stringify(passedInBracket);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://bracketking-91661.firebaseio.com/bracket.json', body, {headers});
  }

  fetchBracket() {
    return this.http.get('https://bracketking-91661.firebaseio.com/bracket')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Bracket) => {
          this.bracket = data;
          this.bracketDataRetrieved.emit(this.bracket);
        }
      );
  }

}
