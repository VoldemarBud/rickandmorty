import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILocations } from 'src/app/modules/locations/locations.interface';

@Component({
  selector: 'app-dialog-location-info',
  templateUrl: './dialog-location-info.component.html',
  styleUrls: ['./dialog-location-info.component.css']
})
export class DialogLocationInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ILocations) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
