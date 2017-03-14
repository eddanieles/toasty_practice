export const POINT_ADDED = 'POINT_ADDED';

export function addPoint(score) {
  return {
    type: POINT_ADDED,
    payload: score
  }
}
