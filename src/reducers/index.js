
import { POINT_ADDED } from '../actions/index'

const initialState = {
  score: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
  case POINT_ADDED:
    return {
      ...state,
      score: action.payload
    };
  }

  return state
}
