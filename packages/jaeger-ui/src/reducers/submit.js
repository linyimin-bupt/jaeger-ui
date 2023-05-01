import { handleActions } from 'redux-actions';

import { submitSearch } from '../actions/jaeger-api';

const initialState = {
  submitType: '',
  service: '',
  markdown: ''
};

function submitSearchDone(state, { payload, meta }) {
  return {...meta.query, markdown: payload};
}

export default handleActions(
  {
    [`${submitSearch}`]: submitSearchDone,
    [`${submitSearch}_PENDING`]: submitSearchDone,
    [`${submitSearch}_FULFILLED`]: submitSearchDone,
    [`${submitSearch}_REJECTED`]: submitSearchDone
  },
  initialState
);