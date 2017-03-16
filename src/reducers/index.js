
import { POINT_ADDED, IS_PLAYING } from '../actions/index';

const initialState = {
  score: 0,
  isRoundOver: true
};

export default function(state = initialState, action) {
  switch(action.type) {
  case POINT_ADDED:
    return {
      ...state,
      score: action.payload
    };
  case IS_PLAYING:
    return {
      ...state,
      isRoundOver: action.payload
    };
  default:
    return state;
  }
}
