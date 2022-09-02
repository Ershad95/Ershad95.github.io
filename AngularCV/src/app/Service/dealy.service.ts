import {Injectable} from '@angular/core'
@Injectable({
    providedIn: "root"
  })
export class DelayService{
    constructor() {
        
    }
    public delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}


