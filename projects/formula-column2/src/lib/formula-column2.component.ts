import { Component, OnInit} from '@angular/core';
import { FormulaColumn2Module } from './formula-column2.module';
@Component({
  selector: 'formula-column2',
  template: `
   <div class="container">
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          formula_column2
        </div>
        <div class="card-body">
          <h6 class="card-title">formula_column2 = (field1_value * field2_value) / field3_value</h6>
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
            <div class="row">
              <div class="col">Field3</div>
              <div class="col">
                <input type="number" [(ngModel)]="field3"
                       class="form-control" />
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
</div>
  `,
  styles: [
  ]
})
export class FormulaColumn2Component implements OnInit {

  constructor() { }
  formularesult: any;
  field1: any;
  field2: any;
  field3: any;
  alertMsg: any;

 
  ngOnInit(): void {
  }

  F2() {
    this.formularesult = (parseInt(this.field1) + parseInt(this.field2)) / parseInt(this.field3);
  }

  formulaResult() {
    this.F2();
    if (!this.formularesult) {
      this.alertMsg = "Please enter greater than 0 value.";
      alert(this.alertMsg);
    } else {
      this.alertMsg = null;
    }
  }
}
