import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Locations } from 'src/app/modules/locations/store/modules/locations';

@Component({
  selector: 'app-dialog-form-location',
  templateUrl: './dialog-form-location.component.html',
  styleUrls: ['./dialog-form-location.component.css']
})
export class DialogFormLocationComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogFormLocationComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Locations,
  ) { }
  onSave(data: any) {

    const newlocation = {
      ...data,
      url: 'https://rickandmortyapi.com/api/location/' + data.url
    }
    data.url = 'https://rickandmortyapi.com/api/location/' + data.url;
    data.created = new Date();
    data.confirm = true
    console.log(data)


    // this.dialogRef.close(data);
  }
  onCancel(): void {
    this.dialogRef.close({ confirm: false });
  }
}
