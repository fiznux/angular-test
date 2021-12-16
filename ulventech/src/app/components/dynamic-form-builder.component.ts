import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UtilString} from '../utilities/string';

@Component({
  selector: 'app-dynamic-form-builder',
  template: `
    <form [formGroup]="form" novalidate>
      <ion-list>
        <ion-item *ngFor="let field of fields">
          <ng-container [ngSwitch]="field.type">
            <ion-label position="floating">
              {{utilString.toHumanCase(field.fieldName)}}
            </ion-label>
            <ion-input *ngSwitchCase="'text'" [formControlName]="field.fieldName"></ion-input>
            <ion-input *ngSwitchCase="'email'" type="email" [formControlName]="field.fieldName"></ion-input>
            <ion-input *ngSwitchCase="'number'" type="number" [formControlName]="field.fieldName"></ion-input>
            <ion-select *ngSwitchCase="'select'" [value]="field.value" [formControlName]="field.fieldName">
              <ion-select-option *ngFor="let option of field.options"
                                 [value]="option"
              >{{utilString.toHumanCase(option)}}</ion-select-option>
            </ion-select>
            <ion-textarea [rows]="'6'" *ngSwitchCase="'multiline'" [formControlName]="field.fieldName"></ion-textarea>
          </ng-container>
        </ion-item>
      </ion-list>
    </form>
  `,
  styleUrls: ['dynamic-form-builder.scss'],
})
export class DynamicFormBuilderComponent {
  @Input() form: FormGroup;
  @Input() fields: any[] = [];
  utilString = UtilString;

  constructor() {
  }
}
