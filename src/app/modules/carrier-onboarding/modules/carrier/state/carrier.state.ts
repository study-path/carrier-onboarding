import { State } from '@ngxs/store';

import { CarrierModel } from '../models/carrier.model';

export interface CarrierStateModel {
  carrierForm: {
    model: CarrierModel,
    dirty: false,
    status: '',
    errors: {}
  }
}

@State<CarrierStateModel>({
  name: 'CarrierState',
  defaults: {
    carrierForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class CarrierState {

}