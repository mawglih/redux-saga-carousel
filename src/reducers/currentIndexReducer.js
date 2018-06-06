import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  currentIndex: 0,
  currentIndex1: 1,
  currentIndex2: 2,
  currentIndex3: 3,
}
export default (state = INITIAL_STATE, action) => {
  const lastIndex = 9;
  console.log("last index", lastIndex);
  console.log("payload", action.payload);
  switch (action.type) {
    case actionTypes.NEXT_SLIDE:
      return {
        ...state,
        currentIndex: state.currentIndex === lastIndex ? 0 : state.currentIndex + 1,
        currentIndex1: state.currentIndex1 === lastIndex ? 0 : state.currentIndex1 + 1,
        currentIndex2: state.currentIndex2 === lastIndex ? 0 : state.currentIndex2 + 1,
        currentIndex3: state.currentIndex3 === lastIndex ? 0 : state.currentIndex3 + 1,
      };
    case actionTypes.PREV_SLIDE:
      return {
        ...state,
        currentIndex: state.currentIndex === 0 ? lastIndex : state.currentIndex - 1,
        currentIndex1: state.currentIndex1 === 0 ? lastIndex : state.currentIndex1 - 1,
        currentIndex2: state.currentIndex2 === 0 ? lastIndex : state.currentIndex2 - 1,
        currentIndex3: state.currentIndex3 === 0 ? lastIndex : state.currentIndex3 - 1,
      };
    default:
      return state;
  }
}
