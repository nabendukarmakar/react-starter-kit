import { dispatch } from '../stores/Dispatcher';

import { ActionTypes } from '../constants/AppConstants';
import { randomUtility } from '../utils/AppUtils';

export function sampleAction() {
  randomUtility();
  dispatch(ActionTypes.SAMPLE_ACTION, {
    actionPerformed: true,
  });
}
