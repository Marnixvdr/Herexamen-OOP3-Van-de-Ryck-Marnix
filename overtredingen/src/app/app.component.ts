import { Component } from '@angular/core';
import { OvertredingenServiceService } from './overtredingen-service.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  locatie;
  datum;
  overtredingReq;

 
  OvertredingList: Array<Data> = [];

  constructor(
    public OvertService: OvertredingenServiceService
  ) { }

  getOvertreding() {
    if (this.datum) {
      console.log(this.datum)
      console.log(this.OvertService.getOvertredingPlaats())
      this.OvertredingList = this.OvertService.getOvertredingPlaats()
    
    }
}

}

