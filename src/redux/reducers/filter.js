import { CLEAR_FILTERED, GET_FILTERED } from '../constants/constants';

const initialState = { info: {}, results: [] };

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FILTERED:
      return {
        info: payload.info,
        results: [...state.results, ...payload.results],
      };
    case CLEAR_FILTERED:
      return { info: {}, results: [] };
    default:
      return state;
  }
};
export default filterReducer;
