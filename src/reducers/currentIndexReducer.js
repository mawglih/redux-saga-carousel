import { NEXT_SLIDE, PREV_SLIDE } from '../actions/types';

const INITIAL_STATE = {
  currentIndex: 0,
  currentIndex1: 1,
  currentIndex2: 2,
  currentIndex3: 3,
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_SLIDE:
      return {
        ...state,
        currentIndex: state.currentIndex,
        currentIndex1: state.currentIndex1,
        currentIndex2: state.currentIndex2,
        currentIndex3: state.currentIndex3,
      };
    case PREV_SLIDE:
      return {
        ...state,
        currentIndex: state.currentIndex,
        currentIndex1: state.currentIndex1,
        currentIndex2: state.currentIndex2,
        currentIndex3: state.currentIndex3,
      };
    default:
      return state;
  }
}
