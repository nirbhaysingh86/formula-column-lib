import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormulaColumn1Module } from './formula-column1.module';
@Component({
  selector: 'formula-column1',
  template: `
    <div class="container">
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          formula_column1
        </div>
        <div class="card-body">
          <h6 class="card-title">formula_column1 = field1_value * field2_value </h6>
          <div class="container">
            <div class="row">
              <div class="col">Field1</div>
              <div class="col">
                <input type="number" [(ngModel)]="field1"
                       class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col">Field2</div>
              <div class="col">
                <input type="number" [(ngModel)]="field2"
                       class="form-control" />
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col"> <button class="btn btn-primary" type="submit" (click)="formulaResult()">Excute formula</button></div>
              <div class="col">
                Results: {{formularesult}}
              </div>
            </div>
            <div class="row" *ngIf="alertMsg">
              <div class="col">
                <div class="alert alert-danger" role="alert">
                  {{alertMsg}}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [
  ]
})
export class FormulaColumn1Component implements OnInit {


  formularesult: any;
  field1: any;
  field2: any;
  alertMsg: any;

  constructor() { }

  ngOnInit(): void {
  }

  F1() {
    this.formularesult = parseInt(this.field1) + parseInt(this.field2);
  }

  formulaResult() {
    this.F1();
    if (!this.formularesult) {
      this.alertMsg = "Please enter greater than 0 value.";
      alert(this.alertMsg);
    } else {
      this.alertMsg = null;
    }
  }
}
