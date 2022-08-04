import { GET_HEROES } from '../constants/constants';

const initialState = { info: {}, results: [] };

const heroReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HEROES:
      return {
        info: payload.info,
        results: [...state.results, ...payload.results],
      };
    default:
      return state;
  }
};
export default heroReducer;
