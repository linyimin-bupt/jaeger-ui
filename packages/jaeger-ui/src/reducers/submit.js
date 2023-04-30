import { handleActions } from 'redux-actions';

import { submitSearch } from '../actions/jaeger-api';

const initialState = {
  submitType: '',
  service: ''
};

function submitSearchDone(state, { payload }) {
  return {...payload};
}

export default handleActions(
  {
    [`${submitSearch}`]: submitSearchDone,
  },
  initialState
);