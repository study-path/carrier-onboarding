export class SetFormStatus {
  static readonly type = '[CarrierOnboarding] SetFormStatus';

  constructor(public isValid: boolean) { }
}