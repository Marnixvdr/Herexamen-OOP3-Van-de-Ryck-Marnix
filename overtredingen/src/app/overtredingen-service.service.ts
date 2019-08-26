import { Injectable } from '@angular/core';
import doc from '../overtredingen.json'

@Injectable({
  providedIn: 'root'
})
export class OvertredingenServiceService {
 
    constructor() { }
    OvertredingsLijst = []
  
  
    getOvertreding(str) {
      console.log(doc);
      let ind = doc.docs.findIndex(item => { return item.id == str });
      if (ind < 0) {
        return null;
      }
      else {
        return doc.docs[ind];
      }
    }
  
    getAllOvertredingen() {
      return doc.docs;
    }
  
    getOvertredingPlaats(plaats) {
      this.OvertredingsLijst = [];
      let overtredingen = this.getAllOvertredingen()
      for (let overtreding of overtredingen) {
        if (overtreding.opnameplaats_straat = plaats) {
          let jsonstring = '{ "Datum" : ' + overtreding.datum_vaststelling + '; "Plaats" : ' + overtreding.opnameplaats_straat + '; "Snelheid" : ' + overtreding.aantal_overtredingen_snelheid + '; "RoodLicht" : ' +overtreding.aantal_overtredingen_roodlicht + '}';
          return(overtreding)
          
        }
      }
      return this.OvertredingsLijst;
    }
  }
  
