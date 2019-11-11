import { FETCH_ANIMALS, FETCH_ANIMALS_SUCCESS} from '../actions/types/Animals';

const initialState = {
  list: [],
  isLoading: false
};

export default function animalsReducer(state = initialState, action) {
  switch (action.type) {
    // case GET_TOKEN:
    //   return [...state, action.payload];
    // case GET_TOKEN_SUCCESS:
    //   return action.response;
    case FETCH_ANIMALS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ANIMALS_SUCCESS:
      return {
        ...state,
        list: action.response.data.animals,
        isLoading: false
      };
    default:
      return state;
  }
}