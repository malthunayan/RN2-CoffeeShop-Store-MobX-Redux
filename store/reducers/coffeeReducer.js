import { COFFEESHOPS_LOADING, GET_COFFEESHOPS } from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: payload,
        loading: false
      };
    case COFFEESHOPS_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default reducer;
