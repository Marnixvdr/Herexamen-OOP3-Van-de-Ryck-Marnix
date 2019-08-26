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
          let jsonstring = '{ "id" : '+ overtreding.id + ', "datum_vaststelling_jaar" : '+ overtreding.datum_vaststelling_jaar +', "datum_vaststelling_maand" :' + overtreding.datum_vaststelling_maand + ' , "datum_vaststelling": '+ overtreding.datum_vaststelling +' , "opnameplaats_straat": '+ overtreding.opnameplaats_straat     +', "opnameplaats_rijrichting_gaand": '+ overtreding.opnameplaats_rijrichting_gaand   +', "opnameplaats_zone_snelheid": '+ overtreding.opnameplaats_zone_snelheid  + ', "aantal_passanten": '+ overtreding.aantal_passanten +', "aantal_overtredingen_snelheid": '+ overtreding.opnameplaats_zone_snelheid+', "aantal_overtredingen_roodlicht": '+ overtreding.aantal_overtredingen_roodlicht+'}'
      }
      return this.OvertredingsLijst;
    }
  }
} 
