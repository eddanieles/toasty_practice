export const POINT_ADDED = 'POINT_ADDED';
export const IS_PLAYING = 'IS_PLAYING';

export function addPoint(score) {
  return {
    type: POINT_ADDED,
    payload: score
  }
}

export function timeIsUp(time) {
  return {
    type: IS_PLAYING,
    payload: time
  }
}
