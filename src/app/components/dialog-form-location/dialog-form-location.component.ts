import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Locations } from 'src/app/modules/locations/store/modules/locations';

@Component({
  selector: 'app-dialog-form-location',
  templateUrl: './dialog-form-location.component.html',
  styleUrls: ['./dialog-form-location.component.css']
})
export class DialogFormLocationComponent {
  locationFormModel: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogFormLocationComponent>) {
    this.locationFormModel = new FormGroup({
      url: new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),
      type: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]),
      created: new FormControl('',
        Validators.required)
    })
  }
  onSubmit() {
    console.log({
      ...this.locationFormModel.value,
      url: 'https://rickandmortyapi.com/api/location/' + this.locationFormModel.value.url
    })

  
    // this.dialogRef.close(newlocation);
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
