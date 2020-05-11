import { State } from '@ngxs/store';

export class AppStateModel { }

@State<AppStateModel>({
  name: 'AppState',
  defaults: {}
})
export class AppState {
  constructor() { }
}