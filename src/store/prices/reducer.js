import { PRICES_ACTION_TYPES } from './actionTypes';

const pricesInit = {
  data: {},
  loading: false,
  error: ''
}

export const pricesReducer = (store = pricesInit, action) => {
  switch (action.type) {
    case PRICES_ACTION_TYPES.SET_PRICES:
      return {
        ...store,
       ...pricesInit,
        data: action.data
      };
    case PRICES_ACTION_TYPES.SET_PRICES_LOADING:
      return {
        ...store,
        ...pricesInit,
        loading: true,
      }
    case PRICES_ACTION_TYPES.SET_PRICES_ERROR:
      return {
        ...store,
        ...pricesInit,
        error: action.data
      }

    default: return store;
  }
}
