import { POINT_ADDED } from '../actions/index'

export default function(state=0, action) {
  switch(action.type) {
  case POINT_ADDED:
    return action.payload;
  }

  return state
}
