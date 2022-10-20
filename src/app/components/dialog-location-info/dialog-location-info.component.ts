import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Locations } from 'src/app/modules/locations/store/modules/locations';

@Component({
  selector: 'app-dialog-location-info',
  templateUrl: './dialog-location-info.component.html',
  styleUrls: ['./dialog-location-info.component.css']
})
export class DialogLocationInfoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Locations) { }

}
