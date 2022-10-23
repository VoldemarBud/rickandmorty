import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-form-location',
  templateUrl: './dialog-form-location.component.html',
  styleUrls: ['./dialog-form-location.component.css']
})
export class DialogFormLocationComponent {
  locationFormModel: FormGroup;

  constructor(
    private dialogFormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogFormLocationComponent>) {
    this._createForm();
  }

  private _createForm() {
    this.locationFormModel = this.dialogFormBuilder.group({
      url: ['', {
        validators: [
          Validators.required,
          Validators.minLength(2),
        ],
        updateOn: 'submit'
      }],
      name: ['', {
        validators: [
          Validators.required,
          Validators.minLength(4),
        ],
        updateOn: 'submit'
      }],
      type: ['',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
          ],
          updateOn: 'submit'
        }],
      created: ['', {
        validators: [Validators.required],
        updateOn: 'submit'
      }]
    })
  }

  onSubmit() {

    if (this.locationFormModel.valid) {
      this.dialogRef.close({
        id:this.locationFormModel.value.url,
        ...this.locationFormModel.value,
        url: 'https://rickandmortyapi.com/api/location/' + this.locationFormModel.value.url
      });

      this.locationFormModel.reset()
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
