import BaseStore from './BaseStore';

import { ActionTypes, EventTypes } from '../constants/AppConstants';

class AppStore extends BaseStore {
  constructor(props) {
    super(props);
    this.actionPerformed = false;
  }

  isActionPerformed() {
    return this.actionPerformed;
  }

  dispatcherCallback(action) {
    const payload = action.payload;

    switch (action.type) {
      case ActionTypes.SAMPLE_ACTION:
        this.actionPerformed = payload.actionPerformed;
        this.emit(EventTypes.SAMPLE_EVENT);
        break;

      default:
        break;
    }
  }
}

export default new AppStore();
