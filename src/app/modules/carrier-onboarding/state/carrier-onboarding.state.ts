import { Action, Selector, State, StateContext } from '@ngxs/store';

import { SetFormStatus } from './carrier-onboarding.actions';


export class CarrierOnboardingModel {
  isFormValid: boolean;
}

@State<CarrierOnboardingModel>({
  name: 'CarrierOnboardingState',
  defaults: {
    isFormValid: false
  },
})
export class CarrierOnboardingState {

  @Selector()
  static isFormValid(state: CarrierOnboardingModel) {
    return state.isFormValid;
  }

  @Action(SetFormStatus)
  setFormStatus(context: StateContext<CarrierOnboardingModel>, setFormStatus: SetFormStatus) {
    context.patchState({ isFormValid: setFormStatus.isValid });
  }

}