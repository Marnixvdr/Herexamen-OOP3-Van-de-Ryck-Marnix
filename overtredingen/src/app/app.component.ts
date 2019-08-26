import { Component } from '@angular/core';
import { OvertredingenServiceService } from './overtredingen-service.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  startDate;
  endDate;
  today = Date.now();

  OvertredingList: Array<Data> = [];

  constructor(
    public OvertService: OvertredingenServiceService
  ) { }

  getOvertreding() {
    if (this.startDate && this.endDate) {
      console.log(this.startDate)
      console.log(this.OvertService.getOvertredingPlaats)}

}
}

