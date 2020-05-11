import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CarrierModel } from '../models/carrier.model';


@Injectable({
  providedIn: 'root'
})
export class CarrierService {
  constructor() { }

  getCarrier(carrierId: string): Observable<CarrierModel> {
    return of(new CarrierModel());
  }
}