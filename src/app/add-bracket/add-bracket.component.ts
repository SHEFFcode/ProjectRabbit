import {Component, OnInit, OnDestroy} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormGroup} from "@angular/forms";
import {LeguedataService} from "../legues/leguedata.service";

@Component({
  moduleId: module.id,
  selector: 'app-add-bracket',
  templateUrl: 'add-bracket.component.html',
  styleUrls: ['add-bracket.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AddBracketComponent implements OnInit, OnDestroy {
  matchupForm: FormGroup;
  constructor(private legueService: LeguedataService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onSubmit() {

  }

  onCancel() {

  }

  onRemoveItem(i) {

  }

  onAddItem(itemName, itemAmount) {

  }

}
